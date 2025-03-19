import { useState, useEffect, useMemo } from 'react';

// Character density mapping from least filled to most filled
const densityChars = ' 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Improved custom hook to measure character size more accurately
const useCharacterSize = (fontSize: number) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const measureChar = () => {
      // Create a pre element to better measure monospace font
      const pre = document.createElement('pre');
      pre.style.fontFamily = 'monospace';
      pre.style.fontSize = `${fontSize}px`;
      pre.style.position = 'absolute';
      pre.style.visibility = 'hidden';
      pre.style.margin = '0';
      pre.style.padding = '0';
      pre.style.lineHeight = '1';
      
      // Use a 10x10 grid of characters to get a more accurate average
      let testString = '';
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          testString += 'W';
        }
        testString += '\n';
      }
      pre.textContent = testString;
      
      document.body.appendChild(pre);
      
      const { width, height } = pre.getBoundingClientRect();
      setSize({ 
        width: width / 10,  // Get average width per character
        height: height / 10  // Get average height per line
      });
      
      document.body.removeChild(pre);
    };
    
    measureChar();
    
    // Re-measure on window resize
    window.addEventListener('resize', measureChar);
    return () => window.removeEventListener('resize', measureChar);
  }, [fontSize]);
  
  return size;
};

// Custom hook to track viewport size
const useViewportSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
};

const BackgroundGrid = () => {
    const { width: charWidth, height: charHeight } = useCharacterSize(10); // Smaller font for more density
    const { width: vpWidth, height: vpHeight } = useViewportSize();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        // Account for scroll position
        const x = e.clientX + window.pageXOffset;
        const y = e.clientY + window.pageYOffset;
        setMousePos({ x, y });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    // Ensure we generate enough characters with some extra padding
    const cols = charWidth > 0 ? Math.ceil(vpWidth / charWidth) + 10 : 0;
    const rows = charHeight > 0 ? Math.ceil(vpHeight / charHeight) + 10 : 0;
  
    const gridString = useMemo(() => {
      if (cols === 0 || rows === 0) return '';
      
      // Use a smaller effective distance to make the effect more pronounced
      const maxDistance = Math.sqrt(vpWidth ** 2 + vpHeight ** 2) / 2;
      const lines = [];
      
      // Account for scroll position when calculating cell positions
      const scrollX = window.pageXOffset;
      const scrollY = window.pageYOffset;
      
      for (let i = 0; i < rows; i++) {
        let rowStr = '';
        for (let j = 0; j < cols; j++) {
          const cellX = j * charWidth + scrollX;
          const cellY = i * charHeight + scrollY;
          const dx = cellX - mousePos.x;
          const dy = cellY - mousePos.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          
          // Create a steeper falloff for more pronounced effect
          const normalizedD = Math.min(1, d / maxDistance);
          const index = Math.floor((1 - normalizedD) * (densityChars.length - 1));
          rowStr += densityChars[Math.max(0, Math.min(densityChars.length - 1, index))];
        }
        lines.push(rowStr);
      }
      return lines.join('\n');
    }, [mousePos, rows, cols, charWidth, charHeight, vpWidth, vpHeight]);
  
    if (cols === 0 || rows === 0) return null;
  
    return (
      <pre
        className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none font-mono text-[10px] leading-none text-gray-500 dark:text-gray-600 opacity-50"
        style={{ 
          zIndex: 0,
          margin: 0,
          padding: 0,
          whiteSpace: 'pre',
          letterSpacing: 0
        }}
      >
        {gridString}
      </pre>
    );
  };

  export default BackgroundGrid;
