import {iTile} from "./iTile";
import {map} from "../map";
import {Air} from "./air";

export class Player implements iTile {

    draw(g: CanvasRenderingContext2D, x: number, y: number) {

    }
    color(): string {
        return "";
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
        return false;
    }

    isFallingStone(): boolean {
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
