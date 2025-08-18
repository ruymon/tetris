import CONFIG from "./config.js";
import Tetrominos from "./tetrominos.js";
import onInput from "./inputManager.js";
import Renderer from "./renderer.js";
import Sfx from "./sfx.js";

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

  Sfx.drop();

  Renderer.drawGrid();
  gameState.isPaused = false;

  setTimeout(() => {
    Sfx.drop();
  }, 1000);
};

const handlePause = () => {};

const handleResume = () => {};

const handleGameOver = () => {
  Sfx.gameOver();
};

onInput("left", (_) => {});
onInput("right", (_) => {});
onInput("rotate", (_) => {});
onInput("softDrop", (_) => {});
onInput("hardDrop", (_) => {});

window.handleStart = handleStart;
