import {iTile} from "./iTile";
import {KeyConfiguration} from "./key-configuration";
import {IFallingState} from "./state/iFalling-state";
import {Stopped} from "./state/stopped";
import {Player} from "../player";

export class Lock implements iTile {
    constructor(
        private keyConfig: KeyConfiguration
    ) {
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        this.keyConfig.coloring(g, x, y);
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

    moveHorizontal(player: Player, dx: number): void {
    }

    moveVertical(player: Player, dy: number): void {
    }

    stopDropping() {
    }

    update(x: number, y: number) {
    }

    computeFallingBlockCollision(): IFallingState {
        return new Stopped();
    }
}
