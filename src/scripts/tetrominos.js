const Tetrominos = {
  J: {
    shape: [
      [false, false, true],
      [true, true, true],
    ],
    color: "blue",
  },
  T: {
    shape: [
      [true, true, true],
      [false, true, false],
    ],
    color: "purple",
  },
  I: {
    shape: [[true, true, true, true]],
    color: "cyan",
  },
  O: {
    shape: [
      [true, true],
      [true, true],
    ],
    color: "yellow",
  },
  L: {
    shape: [
      [true, false, false],
      [true, true, true],
    ],
    color: "orange",
  },
  S: {
    shape: [
      [false, true, true],
      [true, true, false],
    ],
    color: "green",
  },
  Z: {
    shape: [
      [true, true, false],
      [false, true, true],
    ],
    color: "red",
  },
};

export default Tetrominos;
