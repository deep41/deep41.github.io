import { useEffect, useRef } from 'react';
// @ts-ignore
import * as THREE from 'three';

const BackgroundGrid = () => {
  // Settings that can be modified
  const settings = {
    dropoff: 300,          // pixels at which the effect fades out
    nearColor: 0xff00ff,   // magenta (closest)
    fontSize: 16,          // font size in pixels for grid cell
    character: '@'         // character to render
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const spritesRef = useRef<THREE.Sprite[]>([]);

  useEffect(() => {
    // track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: window.innerHeight - e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Basic three.js setup
    const container = containerRef.current!;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Setup an orthographic camera that maps 1:1 with pixel space.
    const camera = new THREE.OrthographicCamera(0, width, height, 0, -1, 1);
    const scene = new THREE.Scene();

    // Helper: Create a canvas texture for the character
    const createTextTexture = (char: string, fontSize: number): THREE.Texture => {
      const canvas = document.createElement('canvas');
      canvas.width = fontSize * 2;
      canvas.height = fontSize * 2;
      const ctx = canvas.getContext('2d')!;
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // Draw in white so the material color will tint it.
      ctx.fillStyle = '#ffffff';
      ctx.fillText(char, canvas.width / 2, canvas.height / 2);
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const texture = createTextTexture(settings.character, settings.fontSize);

    // Build grid of sprites
    const cellWidth = settings.fontSize;
    const cellHeight = settings.fontSize;
    const cols = Math.ceil(width / cellWidth) + 1;
    const rows = Math.ceil(height / cellHeight) + 1;

    const sprites: THREE.Sprite[] = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const material = new THREE.SpriteMaterial({
          map: texture,
          color: settings.nearColor,
          transparent: true,
          opacity: 0
        });
        const sprite = new THREE.Sprite(material);
        // Position sprite at center of cell
        sprite.position.set(j * cellWidth, i * cellHeight, 0);
        sprite.scale.set(cellWidth, cellHeight, 1);
        scene.add(sprite);
        sprites.push(sprite);
      }
    }
    spritesRef.current = sprites;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update each sprite's opacity based on distance to the mouse.
      sprites.forEach(sprite => {
        const pos = sprite.position;
        // Note: our camera has origin at top-left with y increasing downward.
        const dx = pos.x - mousePosRef.current.x;
        const dy = pos.y - mousePosRef.current.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const factor = 1 - Math.min(d / settings.dropoff, 1);
        sprite.material.opacity = factor;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Listen for window resize
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.right = w;
      camera.top = h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      // ...cleanup scene objects if needed...
      container.removeChild(renderer.domElement);
    };
  }, [settings.dropoff, settings.fontSize, settings.nearColor, settings.character]);

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
        zIndex: 0
      }}
    />
  );
};

export default BackgroundGrid;
