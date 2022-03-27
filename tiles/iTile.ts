import {IFallingState} from "./state/iFalling-state";
import {Player} from "../player";
import {Map} from "../map";

export interface iTile {
    isAir(): boolean;
    isFalling(): boolean;
    isLock1(): boolean;
    isLock2(): boolean;
    computeFallingBlockCollision(): IFallingState;

    draw(g: CanvasRenderingContext2D, x: number, y: number);
    moveHorizontal(player: Player, dx: number, map: Map): void;
    moveVertical(player: Player, dy: number, map: Map): void;

    drop();
    stopDropping();

    update(x: number, y: number, map: Map);
}
