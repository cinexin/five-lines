import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";

export class FallingStone implements iTile {

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
    color(): string {
        return "#0000cc";
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
        return true;
    }

    isFlux(): boolean {
        return false;
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

    isEdible(): boolean {
        return false;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
    }

    moveVertical(dy: number): void {
    }
}