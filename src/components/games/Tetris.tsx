import React, { useState, useEffect } from 'react';


// Tetromino shapes: [row, col] offsets for each rotation
const TETROMINOES: Record<TetrominoType, TetrominoShape[]> = {
    1: [ // I
      [[0, 0], [0, 1], [0, 2], [0, 3]] as TetrominoShape, // Horizontal
      [[0, 0], [1, 0], [2, 0], [3, 0]] as TetrominoShape  // Vertical
    ],
    2: [ // O
      [[0, 0], [0, 1], [1, 0], [1, 1]] as TetrominoShape  // Square (no rotation needed)
    ],
    3: [ // T
      [[0, 1], [1, 0], [1, 1], [1, 2]] as TetrominoShape, // Base down
      [[0, 0], [1, 0], [2, 0], [1, 1]] as TetrominoShape, // Base right
      [[1, 0], [1, 1], [1, 2], [2, 1]] as TetrominoShape, // Base up
      [[1, 0], [0, 1], [1, 1], [2, 1]] as TetrominoShape  // Base left
    ],
    4: [ // S
       [[0, 1], [0, 2], [1, 0], [1, 1]] as TetrominoShape, // Horizontal
       [[0, 0], [1, 0], [1, 1], [2, 1]] as TetrominoShape  // Vertical
    ],
    5: [ // Z
       [[0, 0], [0, 1], [1, 1], [1, 2]] as TetrominoShape, // Horizontal
       [[0, 1], [1, 0], [1, 1], [2, 0]] as TetrominoShape  // Vertical
    ],
    6: [ // J
        [[0, 1], [1, 1], [2, 0], [2, 1]] as TetrominoShape, // Base up
        [[0, 0], [1, 0], [1, 1], [1, 2]] as TetrominoShape, // Base right
        [[0, 0], [0, 1], [1, 0], [2, 0]] as TetrominoShape, // Base down
        [[0, 0], [0, 1], [0, 2], [1, 2]] as TetrominoShape, // Base left
    ],
    7 : [ // L
        [[0, 2], [1, 0], [1, 1], [1, 2]] as TetrominoShape, // Base down
        [[0, 0], [1, 0], [2, 0], [2, 1]] as TetrominoShape, // Base left
        [[0, 0], [0, 1], [0, 2], [1, 0]] as TetrominoShape, // Base up
        [[0, 0], [0, 1], [1, 1], [2, 1]] as TetrominoShape, // Base right
    ]
  };

// Define types
type TetrominoType = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type GridCell = 0 | TetrominoType;
type GridType = GridCell[][];
type TetrominoShape = [number, number][];

interface TetrominoState {
  type: TetrominoType;
  rotation: number;
  row: number;
  col: number;
}

interface GridProps {
  displayGrid: GridType;
}

// Get shape for a tetromino type and rotation
const getTetrominoShape = (type: TetrominoType, rotation: number): TetrominoShape => {
  const shapes = TETROMINOES[type];
  return shapes[rotation % shapes.length];
};

// Assign colors to tetromino types using Tailwind classes
const getColor = (type: GridCell): string => {
  const colors = {
    0: 'bg-gray-800 dark:bg-gray-700',
    1: 'bg-sky-400 dark:bg-sky-500',
    2: 'bg-amber-400 dark:bg-amber-500',
    3: 'bg-indigo-500 dark:bg-indigo-600',
    4: 'bg-red-400 dark:bg-red-500',
    5: 'bg-fuchsia-500 dark:bg-fuchsia-600',
    6: 'bg-teal-500 dark:bg-teal-600',
    7: 'bg-orange-400 dark:bg-orange-400',
  };
  return colors[type];
};

// Scoring based on rows cleared
const getScoreForRows = (rows: number): number => {
  return { 1: 100, 2: 300, 3: 500, 4: 800 }[rows] || 0;
};

// Grid rendering component
const Grid: React.FC<GridProps> = ({ displayGrid }) => (
  <div className="grid grid-cols-10 gap-px bg-neutral-700 dark:bg-neutral-600 p-1.5 rounded-lg shadow-lg">
    {displayGrid.map((row, r) => row.map((cell, c) => (
      <div
        key={`${r}-${c}`}
        className={`w-6 h-6 rounded-sm transition-colors duration-200 ${getColor(cell)}`}
      />
    )))}
  </div>
);

// Main Tetris component
const Tetris: React.FC = () => {
  const [grid, setGrid] = useState<GridType>(() => 
    Array(20).fill(null).map(() => Array(10).fill(0 as GridCell))
  );
  const [currentTetromino, setCurrentTetromino] = useState<TetrominoState | null>(null);
  const generateRandomTetromino = (): TetrominoType => Math.floor(Math.random() * 7) + 1 as TetrominoType;
  const [nextTetromino, setNextTetromino] = useState<TetrominoType>(generateRandomTetromino());
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Validate tetromino position
  const isValidPosition = (type: TetrominoType, rotation: number, row: number, col: number): boolean => {
    const shape = getTetrominoShape(type, rotation);
    return shape.every(([r, c]) => {
      const gridRow = row + r;
      const gridCol = col + c;
      return (
        gridCol >= 0 && gridCol < 10 && gridRow < 20 &&
        (gridRow < 0 || grid[gridRow][gridCol] === 0)
      );
    });
  };

  // Spawn a new tetromino
  const spawnTetromino = () => {
    const type = nextTetromino;
    setNextTetromino(generateRandomTetromino());
    const newTetromino = { type, rotation: 0, row: 0, col: 3 };
    if (!isValidPosition(type, 0, 0, 3)) {
      setIsPlaying(false); // Game over
    } else {
      setCurrentTetromino(newTetromino);
    }
  };

  // Fix tetromino to grid and spawn new one
  const fixTetromino = () => {
    if (!currentTetromino) return;

    const newGrid = grid.map(row => [...row]);
    const shape = getTetrominoShape(currentTetromino.type, currentTetromino.rotation);
    
    shape.forEach(([r, c]) => {
      const gridRow = currentTetromino.row + r;
      if (gridRow >= 0) {
        newGrid[gridRow][currentTetromino.col + c] = currentTetromino.type;
      }
    });

    // Clear completed rows and update score
    const completedRows: number[] = [];
    newGrid.forEach((row, index) => {
      if (row.every(cell => cell !== 0)) {
        completedRows.push(index);
      }
    });

    if (completedRows.length > 0) {
      const filteredGrid = newGrid.filter((_, index) => !completedRows.includes(index));
      while (filteredGrid.length < 20) {
        filteredGrid.unshift(Array(10).fill(0 as GridCell));
      }
      setGrid(filteredGrid);
      setScore(prev => prev + getScoreForRows(completedRows.length));
    } else {
      setGrid(newGrid);
    }
    spawnTetromino();
  };

  // Movement functions with null checks
  const moveDown = () => {
    if (!currentTetromino) return;
    if (isValidPosition(currentTetromino.type, currentTetromino.rotation, currentTetromino.row + 1, currentTetromino.col)) {
      setCurrentTetromino({ ...currentTetromino, row: currentTetromino.row + 1 });
    } else {
      fixTetromino();
    }
  };

  const moveLeft = () => {
    if (!currentTetromino) return;
    if (isValidPosition(currentTetromino.type, currentTetromino.rotation, currentTetromino.row, currentTetromino.col - 1)) {
      setCurrentTetromino({ ...currentTetromino, col: currentTetromino.col - 1 });
    }
  };

  const moveRight = () => {
    if (!currentTetromino) return;
    if (isValidPosition(currentTetromino.type, currentTetromino.rotation, currentTetromino.row, currentTetromino.col + 1)) {
      setCurrentTetromino({ ...currentTetromino, col: currentTetromino.col + 1 });
    }
  };

  const rotate = () => {
    if (!currentTetromino) return;
    const newRotation = (currentTetromino.rotation + 1) % TETROMINOES[currentTetromino.type].length;
    let newCol = currentTetromino.col;

    // Try default position
    if (isValidPosition(currentTetromino.type, newRotation, currentTetromino.row, newCol)) {
      setCurrentTetromino({ ...currentTetromino, rotation: newRotation });
      return;
    }

    // Wall kick: adjust position if near edges
    const shape = getTetrominoShape(currentTetromino.type, newRotation);
    const leftmost = Math.min(...shape.map(([, c]) => c));
    const rightmost = Math.max(...shape.map(([, c]) => c));

    if (newCol + leftmost < 0) newCol -= leftmost;
    else if (newCol + rightmost >= 10) newCol -= (newCol + rightmost - 9);

    if (isValidPosition(currentTetromino.type, newRotation, currentTetromino.row, newCol)) {
      setCurrentTetromino({ ...currentTetromino, rotation: newRotation, col: newCol });
    }
  };

  // Auto-drop
  useEffect(() => {
    if (!isPlaying || !currentTetromino) return;
    const timer = setInterval(moveDown, 1000);
    return () => clearInterval(timer);
  }, [currentTetromino, isPlaying]);

  // Key controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying || !currentTetromino) return;
      switch (e.key) {
        case 'ArrowLeft': moveLeft(); break;
        case 'ArrowRight': moveRight(); break;
        case 'ArrowDown': moveDown(); break;
        case 'ArrowUp': case ' ': rotate(); break; // Space rotates too
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentTetromino, isPlaying]);

  // Initial spawn
  useEffect(() => spawnTetromino(), []);

  // Restart game 
  const restartGame = () => {
    setGrid(Array(20).fill(null).map(() => Array(10).fill(0 as GridCell)));
    setScore(0);
    const type = generateRandomTetromino()
    setCurrentTetromino({ type, rotation: 0, row: 0, col: 3 })
    setTimeout(() => {
        spawnTetromino();
        setIsPlaying(true);
    }, 100);
  };

  // Combine grid with current tetromino for display
  const displayGrid = grid.map(row => [...row]);
  if (currentTetromino) {
    const shape = getTetrominoShape(currentTetromino.type, currentTetromino.rotation);
    shape.forEach(([r, c]) => {
      const gridRow = currentTetromino.row + r;
      const gridCol = currentTetromino.col + c;
      if (gridRow >= 0 && gridRow < 20 && gridCol >= 0 && gridCol < 10) {
        displayGrid[gridRow][gridCol] = currentTetromino.type;
      }
    });
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[calc(100vh-68px)]">
      <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">Tetris</h1>
      <p className="text-xl font-semibold text-neutral-600 dark:text-neutral-300">Score: {score}</p>
      <div className="relative">
        <Grid displayGrid={displayGrid} />
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 rounded-lg">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">Game Over</h2>
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">Final Score: {score}</h2>
            <button 
              onClick={restartGame}
              className="mt-4 px-4 py-2 bg-zinc-600 hover:bg-zinc-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tetris;