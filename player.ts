import {Position} from "./position";
import {TILE_SIZE} from "./config";
import {Air} from "./tiles/air";
import {PlayerTile} from "./tiles/player-tile";
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
        if (map.getMap()[this.position.y][this.position.x+dx + dx].isAir()
            && !map.getMap()[this.position.y + 1][this.position.x+dx].isAir())
        {
            map.getMap()[this.position.y][this.position.x+dx + dx] = tile;
            this.moveToTile({x: this.position.x + dx, y: this.position.y}, map);
        }
    }

    private moveToTile(newPosition: Position, map: Map): void {
        map.getMap()[this.position.y][this.position.x] = new Air();
        map.getMap()[newPosition.y][newPosition.x] = new PlayerTile();
        this.position = newPosition;
    }

    moveHorizontal(dx: number, map: Map) {
        map.getMap()[this.position.y][this.position.x + dx].moveHorizontal(this, dx, map);
    }

    moveVertical(dy: number, map: Map) {
        map.getMap()[this.position.y + dy][this.position.x].moveVertical(this,dy, map);
    }
}
