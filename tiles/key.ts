import {iTile} from "./iTile";
import {moveToTile} from "../input/actions";
import {player} from "../player";
import {KeyConfiguration} from "./key-configuration";
import {IFallingState} from "./state/iFalling-state";
import {Stopped} from "./state/stopped";

export class Key implements iTile {

    constructor(
        private keyConfiguration: KeyConfiguration
    ) {
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        this.keyConfiguration.coloring(g, x, y);
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
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
        this.keyConfiguration.removeLock();
        moveToTile({x: player.x + dx, y: player.y});
    }

    moveVertical(dy: number): void {
        this.keyConfiguration.removeLock();
        moveToTile({x: player.x, y: player.y + dy});
    }

    stopDropping() {
    }

    update(x: number, y: number) {
    }

    computeFallingBlockCollision(): IFallingState {
        return new Stopped();
    }

}
