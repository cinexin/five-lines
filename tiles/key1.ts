import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {player} from "../player";
import {removeLock1} from "./actions";
import {moveToTile} from "../input/actions";

export class Key1 implements iTile {
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

    isUnbreakable(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    color(): string {
        return "#ffcc00";
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    moveHorizontal(dx: number): void {
        removeLock1();
        moveToTile({x: player.x + dx, y: player.y});
    }

    moveVertical(dy: number): void {
        removeLock1();
        moveToTile({x: player.x, y: player.y + dy});

    }

    isBoxy(): boolean {
        return false;
    }

    isStony(): boolean {
        return false;
    }

    drop() {
    }

    stopDropping() {
    }

    isFalling(): boolean {
        return false;
    }
}