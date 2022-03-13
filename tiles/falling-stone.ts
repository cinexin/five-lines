import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {map} from "../map";
import {player} from "../player";
import {moveToTile} from "../input/actions";

export class FallingStone implements iTile {
    private falling: boolean;

    constructor(falling: boolean) {
        this.falling = falling;
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
    color(): string {
        return "#0000cc";
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

    isFallingStone(): boolean {
        return this.falling;
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

    moveHorizontal(dx: number): void {
        if (this.isFallingStone() === false) {
            if (map[player.y][player.x + dx + dx].isAir() && ! map[player.y + 1][player.x + dx].isAir()) {
                map[player.y][player.x + dx + dx] = this;
                moveToTile({x: player.x + dx, y: player.y});
            }
        } else if (this.isFallingStone() === true) {

        }
    }

    moveVertical(dy: number): void {
    }

    isBoxy(): boolean {
        return false;
    }

    isStony(): boolean {
        return true;
    }
}