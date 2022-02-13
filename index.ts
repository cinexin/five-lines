import {Input} from "./input/input";
import {Air} from "./tiles/air";
import {FallingStone} from "./tiles/falling-stone";
import {FallingBox} from "./tiles/falling-box";
import {Stone} from "./tiles/stone";
import {Box} from "./tiles/box";
import {map, transformMap} from "./map";
import {player} from "./player";
import {Left} from "./input/left";
import {Up} from "./input/up";
import {Right} from "./input/right";
import {Down} from "./input/down";

const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

let inputs: Input[] = [];

function handleInputs() {
  while (inputs.length > 0) {
    const current = inputs.pop();
    current.handle();
  }
}

function updateTile(x: number, y: number) {
  if ((map[y][x].isStone() || map[y][x].isFallingStone())
      && map[y + 1][x].isAir()) {
    map[y + 1][x] = new FallingStone();
    map[y][x] = new Air();
  } else if ((map[y][x].isBox() || map[y][x].isFallingBox())
      && map[y + 1][x].isAir()) {
    map[y + 1][x] = new FallingBox();
    map[y][x] = new Air();
  } else if (map[y][x].isFallingStone()) {
    map[y][x] = new Stone();
  } else if (map[y][x].isFallingBox()) {
    map[y][x] = new Box();
  }
}

function updateMap() {
  for (let y = map.length - 1; y >= 0; y--) {
    for (let x = 0; x < map[y].length; x++) {
      updateTile(x, y);
    }
  }
}

function update() {
  handleInputs();
  updateMap();
}

function setColorOfTile(g: CanvasRenderingContext2D, x: number, y: number): void {
  if (map[y][x].isFlux())
    g.fillStyle = "#ccffcc";
  else if (map[y][x].isUnbreakable())
    g.fillStyle = "#999999";
  else if (map[y][x].isStone() || map[y][x].isFallingStone())
    g.fillStyle = "#0000cc";
  else if (map[y][x].isBox() || map[y][x].isFallingBox())
    g.fillStyle = "#8b4513";
  else if (map[y][x].isKey1() || map[y][x].isLock1())
    g.fillStyle = "#ffcc00";
  else if (map[y][x].isKey2() || map[y][x].isLock2())
    g.fillStyle = "#00ccff";

}

function drawMap(g: CanvasRenderingContext2D) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      setColorOfTile(g, x, y);
      if (!map[y][x].isAir() && !map[y][x].isPlayer())
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
}

function drawPlayer(g: CanvasRenderingContext2D) {
  g.fillStyle = "#ff0000";
  g.fillRect(player.x * TILE_SIZE, player.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function createGraphics() {
  let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
  let g = canvas.getContext("2d");
  g.clearRect(0, 0, canvas.width, canvas.height);
  return g;
}

function draw() {
  const g = createGraphics();
  drawMap(g);
  drawPlayer(g);
}

function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  transformMap();
  gameLoop();
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

