import {Input} from "./input";
import {moveVertical} from "./actions";

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
        moveVertical(1);
    }

}