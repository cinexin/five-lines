import {IFallingState} from "./state/iFalling-state";

export interface iTile {
    isAir(): boolean;
    isFalling(): boolean;
    isLock1(): boolean;
    isLock2(): boolean;
    computeFallingBlockCollision(): IFallingState;

    draw(g: CanvasRenderingContext2D, x: number, y: number);
    moveHorizontal(dx: number): void;
    moveVertical(dy: number): void;

    drop();
    stopDropping();

    update(x: number, y: number);
}
