import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";

export class FallingBox implements iTile {
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
        return true;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }
    isStone(): boolean {
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
    }

    moveVertical(dy: number): void {
    }

}