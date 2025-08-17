import CONFIG from "./config.js";
import Tetrominos from "./tetrominos.js";
import onInput from "./inputManager.js";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 800;

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

    tetromino.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          ctx.fillStyle = tetromino.color;
          ctx.fillRect(
            (offsetX + x) * cellWidth,
            (offsetY + y) * cellHeight,
            cellWidth,
            cellHeight,
          );
          ctx.strokeStyle = "#000";
          ctx.strokeRect(
            (offsetX + x) * cellWidth,
            (offsetY + y) * cellHeight,
            cellWidth,
            cellHeight,
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
  const availableTetrominos = Object.keys(Tetrominos);
  const randomIndex = Math.floor(Math.random() * availableTetrominos.length);

  return {
    name: availableTetrominos[randomIndex],
    matrix: Tetrominos[availableTetrominos[randomIndex]],
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

onInput("left", (_) => {});
onInput("right", (_) => {});
onInput("rotate", (_) => {});
onInput("softDrop", (_) => {});
onInput("hardDrop", (_) => {});

window.handleStart = handleStart;
