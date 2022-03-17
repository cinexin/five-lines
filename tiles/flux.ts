import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {player} from "../player";
import {moveToTile} from "../input/actions";
import {IFallingState} from "./state/iFalling-state";
import {Stopped} from "./state/stopped";

export class Flux implements iTile {

    isAir(): boolean {
        return false;
    }

    isFalling(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    drop() {
    }

    stopDropping() {
    }
    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
    color(): string {
        return "#ccffcc";
    }

    moveHorizontal(dx: number): void {
        moveToTile({x: player.x + dx, y: player.y});

    }

    moveVertical(dy: number): void {
        moveToTile({x:player.x, y: player.y + dy});
    }

    update(x: number, y: number) {
    }

    computeFallingBlockCollision(): IFallingState {
        return new Stopped();
    }

}
