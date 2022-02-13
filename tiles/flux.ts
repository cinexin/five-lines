import {Tile} from "./title";

export class Flux implements Tile {
    isFallingStone(): boolean {
        return false;
    }
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
        return true;
    }

    isKey1(): boolean {
        return false;
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

}