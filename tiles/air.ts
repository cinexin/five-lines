import {iTile} from "./iTile";
import {moveToTile} from "../input/actions";
import { IFallingState } from "./state/iFalling-state";
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
        moveToTile(player, {x: player.getPosition().x + dx, y: player.getPosition().y});
    }

    moveVertical(player: Player, dy: number): void {
        moveToTile(player, {x:player.getPosition().x, y: player.getPosition().y + dy});

    }

    drop() {
    }

    stopDropping() {
    }

    update(x: number, y: number) {
    }
}
