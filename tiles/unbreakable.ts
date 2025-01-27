import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {IFallingState} from "./state/iFalling-state";
import {Stopped} from "./state/stopped";
import {Player} from "../player";
import {Map} from "../map";

export class Unbreakable implements iTile {

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

    color(): string {
        return "#999999";
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    moveHorizontal(player: Player, dx: number): void {
    }

    moveVertical(player: Player, dy: number): void {
    }

    drop() {
    }

    stopDropping() {
    }

    update(x: number, y: number, map: Map) {
    }

    computeFallingBlockCollision(): IFallingState {
        return new Stopped();
    }

}
