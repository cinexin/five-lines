import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {IFallingState} from "./iFalling-state";

export class Stone implements iTile {

    constructor(private fallingState: IFallingState) {
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

    isUnbreakable(): boolean {
        return false;
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
}