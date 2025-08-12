const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 800;

const CONFIG = {
  GRID: {
    ROWS: 20,
    COLS: 10,
  },
  TETROMINOS: {
    J: [
      [0, 0, 5],
      [5, 5, 5],
    ],
    T: [
      [1, 1, 1],
      [0, 1, 0],
    ],
    I: [[2, 2, 2, 2]],
    O: [
      [3, 3],
      [3, 3],
    ],
    L: [
      [4, 0, 0],
      [4, 4, 4],
    ],
    S: [
      [0, 6, 6],
      [6, 6, 0],
    ],
    Z: [
      [7, 7, 0],
      [0, 7, 7],
    ],
  },
  COLORS: ["purple", "cyan", "yellow", "orange", "blue", "green", "red"],
  GAME: {
    DROP_INTERVAL_IN_MS: 1000, // 1 second
    FAST_DROP_INTERVAL_IN_MS: 50, // 0.05 seconds
  },
};

const draw = {
  getCellDimensions: () => ({
    cellWidth: canvas.width / CONFIG.GRID.COLS,
    cellHeight: canvas.height / CONFIG.GRID.ROWS,
  }),

  grid: () => {
    const { cellWidth, cellHeight } = draw.getCellDimensions();
    ctx.strokeStyle = "#ccc";

    for (let i = 0; i <= CONFIG.GRID.COLS; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellWidth, 0);
      ctx.lineTo(i * cellWidth, canvas.height);
      ctx.stroke();
    }

    for (let j = 0; j <= CONFIG.GRID.ROWS; j++) {
      ctx.beginPath();
      ctx.moveTo(0, j * cellHeight);
      ctx.lineTo(canvas.width, j * cellHeight);
      ctx.stroke();
    }
  },

  tetromino: (tetromino, offsetX, offsetY) => {
    const { cellWidth, cellHeight } = draw.getCellDimensions();

    tetromino.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          ctx.fillStyle = CONFIG.COLORS[value - 1];
          ctx.fillRect(
            (offsetX + x) * cellWidth,
            (offsetY + y) * cellHeight,
            cellWidth,
            cellHeight
          );
          ctx.strokeStyle = "#000";
          ctx.strokeRect(
            (offsetX + x) * cellWidth,
            (offsetY + y) * cellHeight,
            cellWidth,
            cellHeight
          );
        }
      });
    });
  },
};

const soundEffects = {
  music: (() => {
    const audioInstance = new Audio("src/assets/music.wav");
    audioInstance.loop = true;
    audioInstance.volume = 0.05;
    return () => audioInstance;
  })(),
  drop: () => {
    const audioInstance = new Audio("src/assets/drop.wav");
    audioInstance.volume = 0.1;
    audioInstance.play();
  },
  hardDrop: () => {
    const audioInstance = new Audio("src/assets/hard-drop.wav");
    audioInstance.volume = 0.1;
    audioInstance.play();
  },
  rotate: () => {
    const audioInstance = new Audio("src/assets/rotate.wav");
    audioInstance.volume = 0.1;
    audioInstance.play();
  },
  gameOver: () => {
    const audioInstance = new Audio("src/assets/game-over.wav");
    audioInstance.volume = 0.1;
    audioInstance.play();
  },
};

const getRandomTetromino = () => {
  const availableTetrominos = Object.keys(CONFIG.TETROMINOS);
  const randomIndex = Math.floor(Math.random() * availableTetrominos.length);

  return {
    name: availableTetrominos[randomIndex],
    matrix: CONFIG.TETROMINOS[availableTetrominos[randomIndex]],
  };
};

const handleStart = () => {
  var gameState = {
    isPaused: false,
    isGameOver: false,
    currentTetromino: null,
    nextTetromino: null,
    matrix: Array.from({ length: CONFIG.GRID.ROWS }, () =>
      Array(CONFIG.GRID.COLS).fill(0)
    ),
    score: 0,
    level: 1,
  };

  console.log("Game started");

  soundEffects.drop();

  draw.grid();
  gameState.isPaused = false;

  setTimeout(() => {
    soundEffects.drop();
  }, 1000);
};

const handlePause = () => {};

const handleResume = () => {};

const handleGameOver = () => {
  soundEffects.gameOver();
};

const handleMoveLeft = () => {};
const handleMoveRight = () => {};

const handleRotate = () => {};
const handleSoftDrop = () => {};
const handleHardDrop = () => {};
