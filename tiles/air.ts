import {iTile} from "./iTile";
import {IFallingState} from "./state/iFalling-state";
import {Falling} from "./state/falling";
import {Player} from "../player";
import {Map} from "../map";

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

    moveHorizontal(player: Player, dx: number, map: Map): void {
        player.moveHorizontal(dx, map);
    }

    moveVertical(player: Player, dy: number, map: Map): void {
        player.move({x: 0, y: dy}, map);

    }

    drop() {
    }

    stopDropping() {
    }

    update(x: number, y: number, map: Map) {
    }
}
