import {iTile} from "../iTile";
import {Player} from "../../player";

export interface IFallingState {
    isFalling(): boolean;
    isStopped(): boolean;
    moveHorizontal(player: Player, tile: iTile, dx: number): void;
    drop(tile: iTile, x: number, y: number): void;
}
