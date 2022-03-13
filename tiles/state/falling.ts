import {IFallingState} from "./iFalling-state";
import {iTile} from "../iTile";

export class Falling implements IFallingState {
    isFalling(): boolean {
        return true;
    }

    isStopped(): boolean {
        return false;
    }

    moveHorizontal(tile: iTile, dx: number): void {

    }

}