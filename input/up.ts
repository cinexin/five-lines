import {Input} from "./input";
import {map} from "../map";
import {player} from "../player";

export class Up implements Input {
    isDown(): boolean {
        return false;
    }

    isLeft(): boolean {
        return false;
    }

    isRight(): boolean {
        return false;
    }

    isUp(): boolean {
        return true;
    }

    handle() {
        map[player.y - 1][player.x].moveVertical(-1);
    }
}