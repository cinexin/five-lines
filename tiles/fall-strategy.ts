import {map} from "../map";
import {Falling} from "./state/falling";
import {Air} from "./air";
import {Stopped} from "./state/stopped";
import {IFallingState} from "./state/iFalling-state";
import {iTile} from "./iTile";

export class FallStrategy {

    constructor(private fallingState: IFallingState) {
    }

    getFalling(): IFallingState {
        return this.fallingState;
    }

    update(tile: iTile, x: number, y: number) {
        this.fallingState = map[y + 1][x].isAir() ? new Falling() : new Stopped();
        this.drop(tile, x, y);
    }

    private drop(tile, x: number, y: number) {
        if (this.fallingState.isFalling()) {
            map[y + 1][x] = tile;
            map[y][x] = new Air();
        }
    }
}
