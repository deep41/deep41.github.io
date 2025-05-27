class InteractiveBackground {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.animationId = null;
    this.isInitialized = false;
    this.dpr = window.devicePixelRatio || 1;
    
    this.init();
  }
  
  init() {
    // Wait for canvas to be available
    this.canvas = document.getElementById('background-canvas');
    if (!this.canvas) {
      console.log('Canvas not found, retrying...');
      setTimeout(() => this.init(), 100);
      return;
    }
    
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) {
      console.error('Could not get canvas context');
      return;
    }
    
    console.log('Interactive background initializing...');
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.animate();
    this.isInitialized = true;
  }
  
  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.particles = [];
    this.isInitialized = false;
  }
  
  resize() {
    if (!this.canvas) return;
    
    // Get the display size
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    
    // Set the canvas size in memory (scaled for high DPI)
    this.canvas.width = displayWidth * this.dpr;
    this.canvas.height = displayHeight * this.dpr;
    
    // Scale the canvas back down using CSS
    this.canvas.style.width = displayWidth + 'px';
    this.canvas.style.height = displayHeight + 'px';
    
    // Scale the drawing context so everything draws at the correct size
    this.ctx.scale(this.dpr, this.dpr);
    
    // Store logical dimensions for calculations
    this.logicalWidth = displayWidth;
    this.logicalHeight = displayHeight;
  }
  
  createParticles() {
    if (!this.canvas) return;
    
    this.particles = []; // Clear existing particles
    const particleCount = Math.floor((this.logicalWidth * this.logicalHeight) / 15000);
    
    // Color palette with subtle highlights
    const colors = [
      { r: 255, g: 255, b: 255 }, // White
      { r: 200, g: 220, b: 255 }, // Light blue
      { r: 255, g: 220, b: 200 }, // Light orange
      { r: 220, g: 255, b: 220 }, // Light green
      { r: 255, g: 200, b: 255 }, // Light magenta
      { r: 220, g: 220, b: 255 }, // Light purple
    ];
    
    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      this.particles.push({
        x: Math.random() * this.logicalWidth,
        y: Math.random() * this.logicalHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.2,
        color: color
      });
    }
    
    console.log(`Created ${particleCount} particles`);
  }
  
  updateParticles() {
    if (!this.canvas) return;
    
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = this.logicalWidth;
      if (particle.x > this.logicalWidth) particle.x = 0;
      if (particle.y < 0) particle.y = this.logicalHeight;
      if (particle.y > this.logicalHeight) particle.y = 0;
      
      // Mouse interaction
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx += dx * force * 0.001;
        particle.vy += dy * force * 0.001;
      }
      
      // Damping
      particle.vx *= 0.99;
      particle.vy *= 0.99;
    });
  }
  
  drawParticles() {
    if (!this.ctx) return;
    
    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.opacity})`;
      this.ctx.fill();
    });
  }
  
  drawConnections() {
    if (!this.ctx) return;
    
    this.particles.forEach((particle, i) => {
      for (let j = i + 1; j < this.particles.length; j++) {
        const other = this.particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const opacity = (120 - distance) / 120 * 0.15;
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(other.x, other.y);
          
          // Blend colors for connections
          const avgR = (particle.color.r + other.color.r) / 2;
          const avgG = (particle.color.g + other.color.g) / 2;
          const avgB = (particle.color.b + other.color.b) / 2;
          
          this.ctx.strokeStyle = `rgba(${avgR}, ${avgG}, ${avgB}, ${opacity})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    });
  }
  
  drawMouseGlow() {
    if (!this.ctx) return;
    
    const gradient = this.ctx.createRadialGradient(
      this.mouse.x, this.mouse.y, 0,
      this.mouse.x, this.mouse.y, 150
    );
    gradient.addColorStop(0, 'rgba(100, 150, 255, 0.1)');
    gradient.addColorStop(0.5, 'rgba(150, 100, 255, 0.05)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    this.ctx.beginPath();
    this.ctx.arc(this.mouse.x, this.mouse.y, 150, 0, Math.PI * 2);
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
  }
  
  animate() {
    if (!this.ctx || !this.canvas) return;
    
    this.ctx.clearRect(0, 0, this.logicalWidth, this.logicalHeight);
    
    this.updateParticles();
    this.drawConnections();
    this.drawParticles();
    this.drawMouseGlow();
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }
  
  bindEvents() {
    const handleResize = () => {
      this.dpr = window.devicePixelRatio || 1;
      this.resize();
      this.createParticles();
    };
    
    const handleMouseMove = (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    };
    
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        this.mouse.x = e.touches[0].clientX;
        this.mouse.y = e.touches[0].clientY;
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    // Store references for cleanup
    this.eventHandlers = {
      resize: handleResize,
      mousemove: handleMouseMove,
      touchmove: handleTouchMove
    };
  }
  
  unbindEvents() {
    if (this.eventHandlers) {
      window.removeEventListener('resize', this.eventHandlers.resize);
      window.removeEventListener('mousemove', this.eventHandlers.mousemove);
      window.removeEventListener('touchmove', this.eventHandlers.touchmove);
    }
  }
}

// Global instance
let backgroundInstance = null;

function initializeBackground() {
  console.log('Initializing background...');
  
  // Clean up existing instance
  if (backgroundInstance) {
    backgroundInstance.destroy();
    backgroundInstance.unbindEvents();
  }
  
  // Create new instance
  backgroundInstance = new InteractiveBackground();
  
  // Expose globally for debugging
  window.backgroundInstance = backgroundInstance;
}

// Initialize on different events
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeBackground);
} else {
  initializeBackground();
}

// Handle Astro navigation
document.addEventListener('astro:page-load', () => {
  console.log('Astro page load detected');
  setTimeout(initializeBackground, 100);
});

// Fallback initialization
setTimeout(() => {
  if (!backgroundInstance || !backgroundInstance.isInitialized) {
    console.log('Fallback initialization');
    initializeBackground();
  }
}, 1000); 