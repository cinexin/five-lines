import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {IFallingState} from "./state/iFalling-state";
import {Falling} from "./state/falling";
import {Stopped} from "./state/stopped";
import {map} from "../map";
import {Air} from "./air";

export class Box implements iTile {

    constructor(private fallingState: IFallingState) {
    }


    isAir(): boolean {
        return false;
    }

    isFalling(): boolean {
        return this.fallingState.isFalling();
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    color(): string {
        return "#8b4513";
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

    drop() {
        this.fallingState = new Falling();
    }

    stopDropping() {
        this.fallingState = new Stopped();
    }


    update(x: number, y: number) {
        if (map[y + 1][x].isAir()) {
            this.fallingState = new Falling();
            map[y + 1][x] = this;
            map[y][x] = new Air();
        } else if (map[y][x].isFalling()) {
            this.fallingState = new Stopped();
        }
    }
}
