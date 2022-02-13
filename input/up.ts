import {Input} from "./input";
import {moveVertical} from "./actions";

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
        moveVertical(-1);
    }
}