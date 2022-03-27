import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {IFallingState} from "./state/iFalling-state";
import {Stopped} from "./state/stopped";
import {Player} from "../player";
import {Map} from "../map";

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

    moveHorizontal(player: Player, dx: number, map: Map): void {
        player.move({x: 0, y: 0}, map)

    }

    moveVertical(player: Player, dy: number, map: Map): void {
        player.move({x: 0, y: 0}, map);
    }

    update(x: number, y: number) {
    }

    computeFallingBlockCollision(): IFallingState {
        return new Stopped();
    }

}
