import {Air} from "../tiles/air";
import {Player} from "../tiles/player";
import {Position} from "../position";
import {map} from "../map";
import {player} from "../player";

export function moveToTile(newPlayerPosition: Position) {
    map[player.y][player.x] = new Air();
    map[newPlayerPosition.y][newPlayerPosition.x] = new Player();
    player.x = newPlayerPosition.x;
    player.y = newPlayerPosition.y;
}