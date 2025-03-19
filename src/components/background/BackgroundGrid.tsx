import { useEffect, useRef } from 'react';
// @ts-ignore
import * as THREE from 'three';

const BackgroundGrid = () => {
  // Configuration settings
  const settings = {
    dropoff: 64,          // Falloff distance in pixels
    nearColor: 0xff00ff,  // Color for characters (e.g., magenta)
    fontSize: 12,         // Font size in pixels
    cellWidth: 16,        // Width of each grid cell in pixels
    cellHeight: 16,       // Height of each grid cell in pixels
  };

  // Character set ranked by density
  const densityChars = [
    '.', ' ', '`', '\'', '-', '_',
    'i', 'l', '1', '!', ':', ';',
    'r', 't', 'j', 'o', 'c', 'v',
    'x', 'n', 'u', 'y', 'z', 'L',
    's', 'T', 'J', 'C', 'I', '7',
    'F', 'f', 'O', 'e', 'a', 'S',
    'P', '2', 'Y', 'b', 'p', 'q',
    'E', 'A', 'U', 'X', '3', '5',
    '9', '6', 'd', 'h', 'k', '4',
    'H', 'K', '8', 'G', '0', 'm',
    'N', 'B', 'D', 'R', 'g', 'M',
    'W', '@', '#'
  ];

  const containerRef = useRef(null);
  const mousePosRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    // Mouse movement handler
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: window.innerHeight - e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Three.js setup
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const camera = new THREE.OrthographicCamera(0, width, height, 0, -1, 1);
    const scene = new THREE.Scene();

    // Create texture atlas for characters
    const createTextTexture = () => {
      const N = densityChars.length; // 73 characters
      const canvasWidth = N * settings.cellWidth;
      const canvasHeight = settings.cellHeight; // Use cellHeight
      const canvas = document.createElement('canvas');
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext('2d');
      ctx.font = `${settings.fontSize}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff'; // White base, tinted later
      densityChars.forEach((char, i) => {
        const x = i * settings.cellWidth + settings.cellWidth / 2;
        const y = canvasHeight / 2;
        ctx.fillText(char, x, y);
      });
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const texture = createTextTexture();

    // Grid setup with separate cellWidth and cellHeight
    const cols = Math.ceil(width / settings.cellWidth) + 1;
    const rows = Math.ceil(height / settings.cellHeight) + 1;
    const instanceCount = cols * rows;

    // Geometry with random attribute
    const geometry = new THREE.PlaneGeometry(settings.cellWidth, settings.cellHeight);
    const randoms = new Float32Array(instanceCount);
    for (let i = 0; i < instanceCount; i++) {
      randoms[i] = Math.random(); // Random value for character variation
    }
    geometry.setAttribute('random', new THREE.InstancedBufferAttribute(randoms, 1));

    // Shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        map: { value: texture },
        mousePos: { value: new THREE.Vector2(mousePosRef.current.x, mousePosRef.current.y) },
        dropoff: { value: settings.dropoff },
        nearColor: { value: new THREE.Color(settings.nearColor) },
        N: { value: densityChars.length }, // 73
      },
      vertexShader: `
        attribute float random;
        varying vec2 vUv;
        varying vec2 vInstancePos;
        varying float vRandom;
        void main() {
          vUv = uv;
          vInstancePos = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xy;
          vRandom = random;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D map;
        uniform vec2 mousePos;
        uniform float dropoff;
        uniform vec3 nearColor;
        uniform float N;
        varying vec2 vUv;
        varying vec2 vInstancePos;
        varying float vRandom;

        void main() {
          float d = distance(vInstancePos, mousePos);
          if (d > dropoff) discard; // Hide elements outside falloff

          float normD = clamp(d / dropoff, 0.0, 1.0); // Normalized distance
          float floatIndex = (1.0 - normD) * (N - 1.0); // Dense near cursor
          floatIndex += (vRandom - 0.5) * 3.0; // Random variation ±1.5
          int index = int(clamp(round(floatIndex), 0.0, N - 1.0));

          vec2 adjustedUv = vec2((vUv.x + float(index)) / N, vUv.y);
          vec4 texColor = texture2D(map, adjustedUv);
          if (texColor.a < 0.5) discard; // Discard transparent areas

          // Use transparency for falloff
          float alpha = 1.0 - normD;
          gl_FragColor = vec4(nearColor, alpha * texColor.a);
        }
      `,
      transparent: true,
    });

    // Instanced mesh
    const mesh = new THREE.InstancedMesh(geometry, material, instanceCount);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const index = i * cols + j;
        dummy.position.set(
          j * settings.cellWidth + settings.cellWidth / 2,
          i * settings.cellHeight + settings.cellHeight / 2,
          0
        );
        dummy.updateMatrix();
        mesh.setMatrixAt(index, dummy.matrix);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    scene.add(mesh);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      material.uniforms.mousePos.value.set(mousePosRef.current.x, mousePosRef.current.y);
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.right = w;
      camera.top = h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [settings.dropoff, settings.fontSize, settings.nearColor, settings.cellWidth, settings.cellHeight]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default BackgroundGrid;