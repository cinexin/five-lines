import {iTile} from "./tiles/iTile";
import {Air} from "./tiles/air";
import {Player} from "./tiles/player";
import {Unbreakable} from "./tiles/unbreakable";
import {Stone} from "./tiles/stone";
import {Box} from "./tiles/box";
import {Flux} from "./tiles/flux";
import {Key1} from "./tiles/key1";
import {Lock1} from "./tiles/lock1";
import {Key2} from "./tiles/key2";
import {Lock2} from "./tiles/lock2";
import {Stopped} from "./tiles/state/stopped";
import {Falling} from "./tiles/state/falling";

enum RawTile {
    AIR,
    FLUX,
    UNBREAKABLE,
    PLAYER,
    STONE,
    FALLING_STONE,
    BOX,
    FALLING_BOX,
    KEY1,
    LOCK1,
    KEY2,
    LOCK2
}


let rawMap: RawTile[][] = [
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 3, 0, 1, 1, 2, 0, 2],
    [2, 4, 2, 6, 1, 2, 0, 2],
    [2, 8, 4, 1, 1, 2, 0, 2],
    [2, 4, 1, 1, 1, 9, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
];
export let map: iTile[][];
function assertExhausted(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function transformTile(tile: RawTile) {
    switch (tile) {
        case RawTile.AIR: return new Air();
        case RawTile.PLAYER: return new Player();
        case RawTile.UNBREAKABLE: return new Unbreakable();
        case RawTile.STONE: return new Stone(new Stopped());
        case RawTile.FALLING_STONE: return new Stone(new Falling());
        case RawTile.BOX: return new Box(new Stopped());
        case RawTile.FALLING_BOX: return new Box(new Falling());
        case RawTile.FLUX: return new Flux();
        case RawTile.KEY1: return new Key1();
        case RawTile.LOCK1: return new Lock1();
        case RawTile.KEY2: return new Key2();
        case RawTile.LOCK2: return new Lock2();
        default: assertExhausted(tile);
    }
}

export function transformMap() {
    map = new Array(rawMap.length);
    for (let y = 0; y < rawMap.length; y++) {
        map[y] = new Array(rawMap[y].length);
        for (let x = 0; x < rawMap[y].length; x++) {
            map[y][x] = transformTile(rawMap[y][x]);
        }
    }
}
