import {map} from "../map";
import {IFallingState} from "./state/iFalling-state";
import {iTile} from "./iTile";
import {Player} from "../player";

export class FallStrategy {

    constructor(private fallingState: IFallingState) {
    }

    update(tile: iTile, x: number, y: number) {
        this.fallingState = map[y + 1][x].computeFallingBlockCollision();
        this.fallingState.drop(tile, x, y);
    }

    moveHorizontal(player: Player, tile: iTile, dx: number) {
        this.fallingState.moveHorizontal(player, tile, dx);
    }
}
