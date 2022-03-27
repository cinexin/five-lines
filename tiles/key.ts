import {iTile} from "./iTile";
import {KeyConfiguration} from "./key-configuration";
import {IFallingState} from "./state/iFalling-state";
import {Stopped} from "./state/stopped";
import {Player} from "../player";
import {Map} from "../map";

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

    moveHorizontal(player: Player, dx: number, map: Map): void {
        this.keyConfiguration.removeLock(map);
        player.move({x: 0, y: 0}, map);
    }

    moveVertical(player: Player, dy: number, map: Map): void {
        this.keyConfiguration.removeLock(map);
        player.move({x: 0, y: 0}, map);
    }

    stopDropping() {
    }

    update(x: number, y: number) {
    }

    computeFallingBlockCollision(): IFallingState {
        return new Stopped();
    }

}
