import {Input} from "./input";
import {map} from "../map";
import {player} from "../player";

export class Down implements Input {

    handle(): void {
        map[player.y + 1][player.x].moveVertical(1);
    }

}