import {IFallingState} from "./iFalling-state";
import {map} from "../map";
import {player} from "../player";
import {iTile} from "./iTile";
import {moveToTile} from "../input/actions";

export class Stopped implements IFallingState {
    isFalling(): boolean {
        return false;
    }

    isStopped(): boolean {
        return true;
    }

    moveHorizontal(tile: iTile, dx: number): void {
        if (map[player.y][player.x+dx+dx].isAir() && !map[player.y+1][player.x+dx].isAir())
        {
            map[player.y][player.x+dx + dx] = tile;
            moveToTile({x: player.x+dx, y: player.y});
        }
    }

}