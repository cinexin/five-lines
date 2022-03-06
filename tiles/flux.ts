import {iTile} from "./iTile";
import {TILE_SIZE} from "../config";
import {player} from "../player";
import {moveToTile} from "../input/actions";

export class Flux implements iTile {
    draw(g: CanvasRenderingContext2D, x: number, y: number) {
        g.fillStyle = this.color();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
    color(): string {
        return "#ccffcc";
    }
    isFallingStone(): boolean {
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

    isFlux(): boolean {
        return true;
    }

    isKey1(): boolean {
        return false;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    isEdible(): boolean {
        return true;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
        moveToTile({x: player.x + dx, y: player.y});

    }

    moveVertical(dy: number): void {
        moveToTile({x:player.x, y: player.y + dy});
    }
}