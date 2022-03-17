import {Input} from "./input";
import {map} from "../map";
import {Player} from "../player";

export class Left implements Input {

    handle(player: Player): void {
        map[player.getPosition().y][player.getPosition().x -1].moveHorizontal(player,-1);
    }
}
