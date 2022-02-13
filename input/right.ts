import {Input} from "./input";
import {moveHorizontal} from "./actions";

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
        moveHorizontal(1);
    }
}