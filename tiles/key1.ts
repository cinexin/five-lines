import {Tile} from "./title";

export class Key1 implements Tile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKey1(): boolean {
        return true;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

}