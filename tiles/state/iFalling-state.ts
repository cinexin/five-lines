import {iTile} from "../iTile";
import {Player} from "../../player";
import {Map} from "../../map";

export interface IFallingState {
    isFalling(): boolean;
    isStopped(): boolean;
    moveHorizontal(player: Player, tile: iTile, dx: number, map: Map): void;
    drop(tile: iTile, x: number, y: number, map: Map): void;
}
