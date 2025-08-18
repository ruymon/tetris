const callbacks = {};

export default function onInput(event, handler) {
  if (!callbacks[event]) callbacks[event] = [];
  callbacks[event].push(handler);
}

function triggerInputEvent(event) {
  const handlers = callbacks[event];
  if (handlers) {
    handlers.forEach((handler) => {
      handler();
    });
  }
}

// Keyboard Inputs
const keyMap = {
  ArrowLeft: "left",
  ArrowRight: "right",
  ArrowUp: "rotate",
  ArrowDown: "softDrop",
  Space: "hardDrop",
};

window.addEventListener("keydown", (e) => {
  const event = keyMap[e.code];
  if (event) {
    e.preventDefault();
    triggerInputEvent(event);
  }
});

// TODO: Mobile Inputs
