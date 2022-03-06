import {Input} from "./input";
import {map} from "../map";
import {player} from "../player";

export class Left implements Input {

    handle(): void {
        map[player.y][player.x -1].moveHorizontal(-1);
    }
}