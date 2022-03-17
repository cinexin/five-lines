import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {removeLock} from "./actions";
import {moveToTile} from "../input/actions";
import {player} from "../player";
import {KeyConfiguration} from "./key-configuration";

export class Key implements iTile {

    constructor(
        private keyConfiguration: KeyConfiguration
    ) {
    }

    color(): string {
        return this.keyConfiguration.getColor();
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    drop() {
    }

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

    moveHorizontal(dx: number): void {
        removeLock(this.keyConfiguration.getRemoveStrategy());
        moveToTile({x: player.x + dx, y: player.y});
    }

    moveVertical(dy: number): void {
        removeLock(this.keyConfiguration.getRemoveStrategy());
        moveToTile({x: player.x, y: player.y + dy});
    }

    stopDropping() {
    }

    update(x: number, y: number) {
    }

}
