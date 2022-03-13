import {iTile} from "../iTile";

export interface IFallingState {
    isFalling(): boolean;
    isStopped(): boolean;
    moveHorizontal(tile: iTile, dx: number): void;
}