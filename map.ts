import {iTile} from "./tiles/iTile";
import {Air} from "./tiles/air";
import {PlayerTile} from "./tiles/player-tile";
import {RemoveLock1} from "./tiles/remove-lock-1";
import {RemoveLock2} from "./tiles/remove-lock-2";
import {KeyConfiguration} from "./tiles/key-configuration";
import {RAW_TILES} from "./config";
import {IFallingState} from "./tiles/state/iFalling-state";
import {IRemoveStrategy} from "./tiles/iRemove-strategy";
import {Player} from "./player";
import {Position} from "./position";
import {RawTile} from "./tiles/raw-tiles/raw-tile";

export const YELLOW_KEY = new KeyConfiguration("#ffcc00", true, new RemoveLock1());
export const BLUE_KEY = new KeyConfiguration("#00ccff", false, new RemoveLock2());

function transformTile(tile: RawTile): iTile {
    return tile.transform();
}

export class Map {
    private readonly map;

    constructor(
        rawMap: number[][]
    ) {
        this.map = new Array(rawMap.length);
        for (let y = 0; y < rawMap.length; y++) {
            this.map[y] = new Array(rawMap[y].length);
            for (let x = 0; x < rawMap[y].length; x++) {
                this.map[y][x] = transformTile(RAW_TILES[rawMap[y][x]]);
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
