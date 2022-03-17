import {iTile} from "./iTile";

export class Player implements iTile {

    isAir(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isFalling(): boolean {
        return false;
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {

    }
    color(): string {
        return "";
    }

    moveHorizontal(dx: number): void {
    }

    moveVertical(dy: number): void {
    }

    drop() {
    }

    stopDropping() {
    }

    update(x: number, y: number) {
    }

}
