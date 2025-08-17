import CONFIG from "./config.js";
import Tetrominos from "./tetrominos.js";
import onInput from "./inputManager.js";
import Renderer from "./renderer.js";

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

  Renderer.drawGrid();
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
