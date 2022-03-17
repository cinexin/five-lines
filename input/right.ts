import {Input} from "./input";
import {map} from "../map";
import {Player} from "../player";

export class Right implements Input {

    handle(player: Player) {
        map[player.getPosition().y][player.getPosition().x + 1].moveHorizontal(player,  1);
    }
}
