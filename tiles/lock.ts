import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {KeyConfiguration} from "./key-configuration";

export class Lock implements iTile {
    constructor(
        private keyConfig: KeyConfiguration
    ) {
    }

    color(): string {
        return this.keyConfig.getColor();
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE,
            TILE_SIZE, TILE_SIZE);
    }

    drop() {
    }

    isAir(): boolean {
        return false;
    }

    isFalling(): boolean {
        return false;
    }

    isLock1(): boolean {
        return this.keyConfig.is1();
    }

    isLock2(): boolean {
        return !this.keyConfig.is1();
    }

    moveHorizontal(dx: number): void {
    }

    moveVertical(dy: number): void {
    }

    stopDropping() {
    }

    update(x: number, y: number) {
    }
}
