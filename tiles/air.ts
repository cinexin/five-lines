import {iTile} from "./iTile";
import {player} from "../player";
import {moveToTile} from "../input/actions";

export class Air implements iTile {
    draw(g: CanvasRenderingContext2D, x: number, y: number) {
    }
    color(): string {
        return "";
    }
    isAir(): boolean {
        return true;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
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

    isFallingStone(): boolean {
        return false;
    }

    isEdible(): boolean     {
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