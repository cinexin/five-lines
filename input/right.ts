import {Input} from "./input";
import {map} from "../map";
import {player} from "../player";

export class Right implements Input {

    handle() {
        map[player.y][player.x + 1].moveHorizontal(1);
    }
}