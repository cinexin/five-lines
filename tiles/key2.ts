import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {player} from "../player";
import {removeLock2} from "./actions";
import {moveToTile} from "../input/actions";
import {map} from "../map";
import {Air} from "./air";

export class Key2 implements iTile {

    isFalling(): boolean {
        return false;
    }
    drop() {

    }
    stopDropping() {

    }
    isStony(): boolean {
        return false;
    }
    isBoxy(): boolean {
        return false;
    }

    canFall(): boolean {
        return false;
    }

    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    color(): string {
        return "#00ccff";
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    moveHorizontal(dx: number): void {
        removeLock2();
        moveToTile({x: player.x + dx, y: player.y});
    }

    moveVertical(dy: number): void {
        removeLock2();
        moveToTile({x: player.x, y: player.y + dy});
    }

    update(x: number, y: number) {
    }
}
