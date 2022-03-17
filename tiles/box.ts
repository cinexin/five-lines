import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {IFallingState} from "./state/iFalling-state";
import {Falling} from "./state/falling";
import {Stopped} from "./state/stopped";
import {FallStrategy} from "./fall-strategy";
import {Player} from "../player";

export class Box implements iTile {
    private fallStrategy: FallStrategy;

    constructor(private fallingState: IFallingState) {
        this.fallStrategy = new FallStrategy(this.fallingState);
    }

    computeFallingBlockCollision(): IFallingState {
        return new Stopped();
    }

    isAir(): boolean {
        return false;
    }

    isFalling(): boolean {
        return this.fallingState.isFalling();
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    color(): string {
        return "#8b4513";
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    moveHorizontal(player: Player, dx: number): void {
        this.fallStrategy.moveHorizontal(player, this, dx);
    }

    moveVertical(player: Player, dy: number): void {
    }

    drop() {
        this.fallingState = new Falling();
    }

    stopDropping() {
        this.fallingState = new Stopped();
    }


    update(x: number, y: number) {
        this.fallStrategy.update(this, x, y);
    }
}
