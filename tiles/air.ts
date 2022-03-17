import {iTile} from "./iTile";
import {IFallingState} from "./state/iFalling-state";
import {Falling} from "./state/falling";
import {Player} from "../player";

export class Air implements iTile {

    computeFallingBlockCollision(): IFallingState {
        return new Falling();
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
    }

    isAir(): boolean {
        return true;
    }

    isFalling(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    moveHorizontal(player: Player, dx: number): void {
        player.moveHorizontal(dx);
    }

    moveVertical(player: Player, dy: number): void {
        player.move({x: 0, y: dy});

    }

    drop() {
    }

    stopDropping() {
    }

    update(x: number, y: number) {
    }
}
