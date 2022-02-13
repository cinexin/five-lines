import {Input} from "./input";
import {moveHorizontal} from "./actions";

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
        moveHorizontal(-1);
    }
}