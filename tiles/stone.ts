import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {IFallingState} from "./state/iFalling-state";
import {Falling} from "./state/falling";
import {Stopped} from "./state/stopped";
import {map} from "../map";
import {Air} from "./air";

export class Stone implements iTile {
    drop() {
        this.fallingState = new Falling();
    }

    stopDropping() {
        this.fallingState = new Stopped();
    }

    constructor(private fallingState: IFallingState) {
    }

    isFalling(): boolean {
        return this.fallingState.isFalling();
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

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isStone(): boolean {
        return true;
    }

    isFallingStone(): boolean {
        return this.fallingState.isFalling();
    }

    color(): string {
        return "#0000cc";
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }


    moveHorizontal(dx: number): void {
        this.fallingState.moveHorizontal(this, dx);
    }

    moveVertical(dy: number): void {
    }

    isBoxy(): boolean {
        return false;
    }

    isStony(): boolean {
        return true;
    }

    canFall(): boolean {
        return true;
    }

    update(x: number, y: number) {
        if (map[y + 1][x].isAir()) {
            this.fallingState = new Falling();
            map[y + 1][x] = this;
            map[y][x] = new Air();
        } else if (this.fallingState.isFalling()) {
            this.fallingState = new Stopped();
        }
    }
}
