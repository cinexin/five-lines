import {iTile} from "./iTile";
import {IFallingState} from "./state/iFalling-state";
import {Stopped} from "./state/stopped";
import {Player} from "../player";

export class PlayerTile implements iTile {

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

    moveHorizontal(player: Player, dx: number): void {
    }

    moveVertical(player: Player, dy: number): void {
    }

    drop() {
    }

    stopDropping() {
    }

    update(x: number, y: number) {
    }

    computeFallingBlockCollision(): IFallingState {
        return new Stopped();
    }

}
