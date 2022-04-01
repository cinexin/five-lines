import {Position} from "./position";
import {TILE_SIZE} from "./config";
import {iTile} from "./tiles/iTile";
import {Map} from "./map";

export class Player {

    constructor(
        private position: Position
    ) {
    }

    draw(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#ff0000";
        g.fillRect(this.position.x * TILE_SIZE, this.position.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    move(offset: Position, map: Map) {
        this.moveToTile({x: this.position.x+offset.x, y: this.position.y+offset.y}, map);
    }

    pushHorizontal(tile: iTile, dx: number, map: Map) {
        if (map.isAir(this.position.x + dx + dx, this.position.y)
            && !map.isAir(this.position.x + dx, this.position.y + 1)) {
            map.setTile(this.position.x + dx + dx, this.position.y, tile);
            this.moveToTile({x: this.position.x + dx, y: this.position.y}, map);
        }
    }

    private moveToTile(newPosition: Position, map: Map): void {
        map.movePlayer(this.position.x, this.position.y, newPosition.x, newPosition.y);
        this.position = newPosition;
    }

    moveHorizontal(dx: number, map: Map) {
        map.moveHorizontal(this, this.position.x, this.position.y, dx);
    }

    moveVertical(dy: number, map: Map) {
        map.moveVertical(this, this.position.x, this.position.y, dy);
    }
}
