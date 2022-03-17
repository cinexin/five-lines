import {IFallingState} from "./iFalling-state";
import {iTile} from "../iTile";
import {Player} from "../../player";

export class Stopped implements IFallingState {
    isFalling(): boolean {
        return false;
    }

    isStopped(): boolean {
        return true;
    }

    moveHorizontal(player: Player, tile: iTile, dx: number): void {
        player.pushHorizontal(tile, dx);
    }

    drop(tile: iTile, x: number, y: number): void {
    }

}
