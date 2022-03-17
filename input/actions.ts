import {Air} from "../tiles/air";
import {PlayerTile} from "../tiles/player-tile";
import {Position} from "../position";
import {map} from "../map";
import {Player} from "../player";

export function moveToTile(player: Player, newPlayerPosition: Position) {
    map[player.getPosition().y][player.getPosition().x] = new Air();
    map[newPlayerPosition.y][newPlayerPosition.x] = new PlayerTile();
    player.setPosition(newPlayerPosition);
}
