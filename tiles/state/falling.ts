import {IFallingState} from "./iFalling-state";
import {iTile} from "../iTile";
import {map} from "../../map";
import {Air} from "../air";

export class Falling implements IFallingState {
    isFalling(): boolean {
        return true;
    }

    isStopped(): boolean {
        return false;
    }

    moveHorizontal(tile: iTile, dx: number): void {

    }

    drop(tile: iTile, x: number, y: number): void {
        map[y + 1][x] = tile;
        map[y][x] = new Air();
    }

}
