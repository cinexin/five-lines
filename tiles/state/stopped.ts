import {IFallingState} from "./iFalling-state";
import {iTile} from "../iTile";
import {Player} from "../../player";
import {Map} from "../../map";

export class Stopped implements IFallingState {
    isFalling(): boolean {
        return false;
    }

    isStopped(): boolean {
        return true;
    }

    moveHorizontal(player: Player, tile: iTile, dx: number, map: Map): void {
        player.pushHorizontal(tile, dx, map);
    }

    drop(tile: iTile, x: number, y: number): void {
    }

}
