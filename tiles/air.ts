import {iTile} from "./iTile";
import {player} from "../player";
import {moveToTile} from "../input/actions";

export class Air implements iTile {
    draw(g: CanvasRenderingContext2D, x: number, y: number) {
    }
    color(): string {
        return "";
    }
    isAir(): boolean {
        return true;
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

    isFallingStone(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
        moveToTile({x: player.x + dx, y: player.y});
    }

    moveVertical(dy: number): void {
        moveToTile({x:player.x, y: player.y + dy});

    }

    isStone(): boolean {
        return false;
    }

    isBoxy(): boolean {
        return false;
    }

    isStony(): boolean {
        return false;
    }

    drop() {
    }

    stopDropping() {
    }

    isFalling(): boolean {
        return false;
    }

}