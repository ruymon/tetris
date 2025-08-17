import CONFIG from "./config.js";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 800;

const cellWidth = canvas.width / CONFIG.GRID.COLS;
const cellHeight = canvas.height / CONFIG.GRID.ROWS;

function drawGrid() {
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
}

function drawTretromino(tetromino, offsetX, offsetY) {
  tetromino.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
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
}

const Renderer = {
  drawGrid,
  drawTretromino,
};

export default Renderer;
