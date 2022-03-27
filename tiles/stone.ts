import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {IFallingState} from "./state/iFalling-state";
import {Falling} from "./state/falling";
import {Stopped} from "./state/stopped";
import {FallStrategy} from "./fall-strategy";
import {Player} from "../player";
import {Map} from "../map";

export class Stone implements iTile {
    private fallStrategy: FallStrategy;

    isFalling(): boolean {
        return this.fallingState.isFalling();
    }
    isAir(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    color(): string {
        return "#0000cc";
    }

    drop() {
        this.fallingState = new Falling();
    }

    stopDropping() {
        this.fallingState = new Stopped();
    }

    constructor(private fallingState: IFallingState) {
        this.fallStrategy = new FallStrategy(this.fallingState);
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }


    moveHorizontal(player: Player, dx: number, map: Map): void {
        this.fallStrategy.moveHorizontal(player, this, dx, map);
    }

    moveVertical(player: Player, dy: number, map: Map): void {
    }


    update(x: number, y: number, map: Map) {
        this.fallStrategy.update(this, x, y, map);
    }

    computeFallingBlockCollision(): IFallingState {
        return new Stopped();
    }
}
