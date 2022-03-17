import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {map} from "../map";
import {Air} from "./air";

export class Lock1 implements iTile {
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
        return true;
    }

    isLock2(): boolean {
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

    color(): string {
        return "#ffcc00";
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    moveHorizontal(dx: number): void {
    }

    moveVertical(dy: number): void {
    }

    isBoxy(): boolean {
        return false;
    }

    isStony(): boolean {
        return false;
    }

    canFall(): boolean {
        return false;
    }

    drop() {
    }

    stopDropping() {
    }

    isFalling(): boolean {
        return false;
    }

    update(x: number, y: number) {
    }
}
