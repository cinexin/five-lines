import {IFallingState} from "./state/iFalling-state";
import {iTile} from "./iTile";
import {Player} from "../player";
import {Map} from "../map";

export class FallStrategy {

    constructor(private fallingState: IFallingState) {
    }

    update(tile: iTile, x: number, y: number, map: Map) {
        this.fallingState = map.computeFallingBlockCollision(x, y+1);

        this.fallingState.drop(tile, x, y, map);
    }

    moveHorizontal(player: Player, tile: iTile, dx: number, map: Map) {
        this.fallingState.moveHorizontal(player, tile, dx, map);
    }
}
