import {Position} from "./position";
import {TILE_SIZE} from "./config";
import {map} from "./map";
import {Air} from "./tiles/air";
import {PlayerTile} from "./tiles/player-tile";
import {iTile} from "./tiles/iTile";

export class Player {

    constructor(
        private position: Position
    ) {
    }

    draw(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#ff0000";
        g.fillRect(this.position.x * TILE_SIZE, this.position.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    move(offset: Position) {
        this.moveToTile({x: this.position.x+offset.x, y: this.position.y+offset.y});
    }

    pushHorizontal(tile: iTile, dx: number) {
        if (map[this.position.y][this.position.x+dx + dx].isAir()
            && !map[this.position.y + 1][this.position.x+dx].isAir())
        {
            map[this.position.y][this.position.x+dx + dx] = tile;
            this.moveToTile({x: this.position.x + dx, y: this.position.y});
        }
    }

    private moveToTile(newPosition: Position): void {
        map[this.position.y][this.position.x] = new Air();
        map[newPosition.y][newPosition.x] = new PlayerTile();
        this.position = newPosition;
    }

    moveHorizontal(dx: number) {
        map[this.position.y][this.position.x + dx].moveHorizontal(this, dx);
    }

    moveVertical(dy: number) {
        map[this.position.y + dy][this.position.x].moveVertical(this,dy);
    }
}
