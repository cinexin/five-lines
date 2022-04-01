import {IFallingState} from "./iFalling-state";
import {iTile} from "../iTile";
import {Player} from "../../player";
import {Map} from "../../map";

export class Falling implements IFallingState {
    isFalling(): boolean {
        return true;
    }

    isStopped(): boolean {
        return false;
    }

    moveHorizontal(player: Player, tile: iTile, dx: number): void {

    }

    drop(tile: iTile, x: number, y: number, map: Map): void {
        map.drop(tile, x, y);
    }

}
