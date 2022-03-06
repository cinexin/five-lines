import {Input} from "./input";
import {map} from "../map";
import {player} from "../player";

export class Right implements Input {
    isDown(): boolean {
        return false;
    }

    isLeft(): boolean {
        return false;
    }

    isRight(): boolean {
        return true;
    }

    isUp(): boolean {
        return false;
    }

    handle() {
        map[player.y][player.x + 1].moveHorizontal(1);
    }
}