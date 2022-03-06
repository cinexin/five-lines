import {Input} from "./input";
import {map} from "../map";
import {player} from "../player";

export class Left implements Input {
    isDown(): boolean {
        return false;
    }

    isLeft(): boolean {
        return true;
    }

    isRight(): boolean {
        return false;
    }

    isUp(): boolean {
        return false;
    }

    handle(): void {
        map[player.y][player.x -1].moveHorizontal(-1);
    }
}