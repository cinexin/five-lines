import {Position} from "./position";
import {TILE_SIZE} from "./config";

export class Player {

    constructor(
        private position: Position
    ) {
    }

    getPosition(): Position {
        return this.position
    }

    setPosition(position: Position): void {
        this.position = position;
    }

    draw(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#ff0000";
        g.fillRect(this.getPosition().x * TILE_SIZE, this.getPosition().y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
}
