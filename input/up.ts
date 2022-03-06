import {Input} from "./input";
import {map} from "../map";
import {player} from "../player";

export class Up implements Input {

    handle() {
        map[player.y - 1][player.x].moveVertical(-1);
    }
}