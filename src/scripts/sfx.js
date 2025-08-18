const Sfx = {
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

export default Sfx;
