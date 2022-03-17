import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";

export class Lock2 implements iTile {
    isAir(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return true;
    }

    isFalling(): boolean {
        return false;
    }

    drop() {

    }
    stopDropping() {

    }
    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
    color(): string {
        return "#00ccff";
    }

    moveHorizontal(dx: number): void {
    }

    moveVertical(dy: number): void {
    }

    update(x: number, y: number) {
    }
}
