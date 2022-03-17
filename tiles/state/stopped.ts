import {IFallingState} from "./iFalling-state";
import {map} from "../../map";
import {iTile} from "../iTile";
import {moveToTile} from "../../input/actions";
import {Player} from "../../player";

export class Stopped implements IFallingState {
    isFalling(): boolean {
        return false;
    }

    isStopped(): boolean {
        return true;
    }

    moveHorizontal(player: Player, tile: iTile, dx: number): void {
        if (map[player.getPosition().y][player.getPosition().x+dx+dx].isAir() && !map[player.getPosition().y+1][player.getPosition().x+dx].isAir())
        {
            map[player.getPosition().y][player.getPosition().x+dx + dx] = tile;
            moveToTile(player, {x: player.getPosition().x+dx, y: player.getPosition().y});
        }
    }

    drop(tile: iTile, x: number, y: number): void {
    }

}
