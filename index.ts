import {Input} from "./input/input";
import {Map} from "./map";
import {Left} from "./input/left";
import {Up} from "./input/up";
import {Right} from "./input/right";
import {Down} from "./input/down";
import {rawMap, SLEEP} from "./config";
import {Player} from "./player";

let inputs: Input[] = [];
const player = new Player({x: 1, y: 1});

function handleInputs(map: Map) {
  while (inputs.length > 0) {
    const current = inputs.pop();
    current.handle(player, map);
  }
}

function update(map: Map) {
  handleInputs(map);
  map.update();
}

function createGraphics() {
  let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
  let g = canvas.getContext("2d");
  g.clearRect(0, 0, canvas.width, canvas.height);
  return g;
}

function draw(map) {
  const g = createGraphics();
  map.draw(g);
  player.draw(g);
}

function gameLoop(map) {
  let before = Date.now();
  update(map);
  draw(map);
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(map), sleep);
}

window.onload = () => {
  const map = new Map([]);
  map.transform(rawMap);
  gameLoop(map);
}

const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";
window.addEventListener("keydown", e => {
  if (e.key === LEFT_KEY || e.key === "a") inputs.push(new Left());
  else if (e.key === UP_KEY || e.key === "w") inputs.push(new Up());
  else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(new Right());
  else if (e.key === DOWN_KEY || e.key === "s") inputs.push(new Down());
});

