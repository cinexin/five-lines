import {Air} from "../tiles/air";
import {PlayerTile} from "../tiles/player-tile";
import {Position} from "../position";
import {map} from "../map";
import {player} from "../player";

export function moveToTile(newPlayerPosition: Position) {
    map[player.y][player.x] = new Air();
    map[newPlayerPosition.y][newPlayerPosition.x] = new PlayerTile();
    player.x = newPlayerPosition.x;
    player.y = newPlayerPosition.y;
}
