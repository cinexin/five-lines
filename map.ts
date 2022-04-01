import {iTile} from "./tiles/iTile";
import {Air} from "./tiles/air";
import {PlayerTile} from "./tiles/player-tile";
import {Unbreakable} from "./tiles/unbreakable";
import {Stone} from "./tiles/stone";
import {Box} from "./tiles/box";
import {Flux} from "./tiles/flux";
import {Stopped} from "./tiles/state/stopped";
import {Falling} from "./tiles/state/falling";
import {Key} from "./tiles/key";
import {RemoveLock1} from "./tiles/remove-lock-1";
import {Lock} from "./tiles/lock";
import {RemoveLock2} from "./tiles/remove-lock-2";
import {KeyConfiguration} from "./tiles/key-configuration";
import {RawTile} from "./config";
import {IFallingState} from "./tiles/state/iFalling-state";
import {IRemoveStrategy} from "./tiles/iRemove-strategy";
import {Player} from "./player";
import {Position} from "./position";

function assertExhausted(x: never): never {
    throw new Error("Unexpected object: " + x);
}

const YELLOW_KEY = new KeyConfiguration("#ffcc00", true, new RemoveLock1());
const BLUE_KEY = new KeyConfiguration("#00ccff", false, new RemoveLock2());

function transformTile(tile: RawTile) {
    switch (tile) {
        case RawTile.AIR: return new Air();
        case RawTile.PLAYER: return new PlayerTile();
        case RawTile.UNBREAKABLE: return new Unbreakable();
        case RawTile.STONE: return new Stone(new Stopped());
        case RawTile.FALLING_STONE: return new Stone(new Falling());
        case RawTile.BOX: return new Box(new Stopped());
        case RawTile.FALLING_BOX: return new Box(new Falling());
        case RawTile.FLUX: return new Flux();
        case RawTile.KEY1: return new Key(YELLOW_KEY);
        case RawTile.LOCK1: return new Lock(YELLOW_KEY);
        case RawTile.KEY2: return new Key(BLUE_KEY);
        case RawTile.LOCK2: return new Lock(BLUE_KEY);
        default: assertExhausted(tile);
    }
}

export class Map {
    constructor(
        private map: iTile[][]
    ) {
    }

    transform(rawMap: RawTile[][]) {
        this.map = new Array(rawMap.length);
        for (let y = 0; y < rawMap.length; y++) {
            this.map[y] = new Array(rawMap[y].length);
            for (let x = 0; x < rawMap[y].length; x++) {
                this.map[y][x] = transformTile(rawMap[y][x]);
            }
        }
    }

    update() {
        for (let y = this.map.length - 1; y >= 0; y--) {
            for (let x = 0; x < this.map[y].length; x++) {
                this.map[y][x].update(x, y, this);
            }
        }
    }

    draw(g: CanvasRenderingContext2D) {
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                this.map[y][x].draw(g, x, y);
            }
        }
    }

    drop(tile: iTile, x: number, y: number) {
        this.map[y+1][x] = tile;
        this.map[y][x] = new Air();
    }

    computeFallingBlockCollision(x: number, y: number): IFallingState {
        return this.map[y][x].computeFallingBlockCollision();
    }

    removeLock(shouldRemove: IRemoveStrategy) {
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (shouldRemove.check(this.map[y][x])) {
                    this.map[y][x] = new Air();
                }
            }
        }
    }

    isAir(x: number, y: number) {
        return this.map[y][x].isAir();
    }

    setTile(x: number, y: number, tile: iTile)
    {
        this.map[y][x] = tile;
    }

    movePlayer(from: Position, to: Position)
    {
        this.map[from.y][from.x] = new Air();
        this.map[to.y][to.x] = new PlayerTile();
    }

    moveHorizontal(player: Player, dx: number)
    {
        this.map[player.position.y][player.position.x+dx].moveHorizontal(player, dx, this);
    }

    moveVertical(player: Player, dy: number)
    {
        this.map[player.position.y + dy][player.position.x].moveVertical(player, dy, this);
    }
}
