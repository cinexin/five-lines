import {IFallingState} from "./state/iFalling-state";
import {Player} from "../player";

export interface iTile {
    isAir(): boolean;
    isFalling(): boolean;
    isLock1(): boolean;
    isLock2(): boolean;
    computeFallingBlockCollision(): IFallingState;

    draw(g: CanvasRenderingContext2D, x: number, y: number);
    moveHorizontal(player: Player, dx: number): void;
    moveVertical(player: Player, dy: number): void;

    drop();
    stopDropping();

    update(x: number, y: number);
}
