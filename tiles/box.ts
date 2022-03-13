import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {map} from "../map";
import {player} from "../player";
import {moveToTile} from "../input/actions";

export class Box implements iTile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return true;
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
        return "#8b4513";
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    moveHorizontal(dx: number): void {
        if (map[player.y][player.x + dx + dx].isAir() && ! map[player.y + 1][player.x + dx].isAir()) {
            map[player.y][player.x + dx + dx] = this;
            moveToTile({x: player.x + dx, y: player.y});
        }
    }

    moveVertical(dy: number): void {
    }

    isBoxy(): boolean {
        return true;
    }

    isStony(): boolean {
        return false;
    }
}