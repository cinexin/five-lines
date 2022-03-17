import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {map} from "../map";
import {Air} from "./air";

export class Lock2 implements iTile {
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
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return true;
    }


    isStone(): boolean {
        return false;
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


    isFalling(): boolean {
        return false;
    }

    update(x: number, y: number) {
    }
}
