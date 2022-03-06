import {Input} from "./input";
import {map} from "../map";
import {player} from "../player";

export class Down implements Input {
    isDown(): boolean {
        return true;
    }

    isLeft(): boolean {
        return false;
    }

    isRight(): boolean {
        return false;
    }

    isUp(): boolean {
        return false;
    }

    handle(): void {
        map[player.y + 1][player.x].moveVertical(1);
    }

}