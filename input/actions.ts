import {Air} from "../tiles/air";
import {Player} from "../tiles/player";
import {Position} from "../position";
import {removeLock1, removeLock2} from "../tiles/actions";
import {map} from "../map";
import {player} from "../player";

export function moveVertical(dy: number) {
    if (map[player.y + dy][player.x].isFlux()
        || map[player.y + dy][player.x].isAir()) {
        moveToTile({x:player.x, y: player.y + dy});
    } else if (map[player.y + dy][player.x].isKey1()) {
        removeLock1();
        moveToTile({x: player.x, y: player.y + dy});
    } else if (map[player.y + dy][player.x].isKey2()) {
        removeLock2();
        moveToTile({x: player.x, y: player.y + dy});
    }
}

export function moveHorizontal(dx: number) {
    if (map[player.y][player.x + dx].isFlux()
        || map[player.y][player.x + dx].isAir()) {
        moveToTile({x: player.x + dx, y: player.y});
    } else if ((map[player.y][player.x + dx].isStone()
            || map[player.y][player.x + dx].isBox())
        && map[player.y][player.x + dx + dx].isAir()
        && ! map[player.y + 1][player.x + dx].isAir()) {
        map[player.y][player.x + dx + dx] = map[player.y][player.x + dx];
        moveToTile({x: player.x + dx, y: player.y});
    } else if (map[player.y][player.x + dx].isKey1()) {
        removeLock1();
        moveToTile({x: player.x + dx, y: player.y});
    } else if (map[player.x][player.x + dx].isKey2()) {
        removeLock2();
        moveToTile({x: player.x + dx, y: player.y});
    }
}


export function moveToTile(newPlayerPosition: Position) {
    map[player.y][player.x] = new Air();
    map[newPlayerPosition.y][newPlayerPosition.x] = new Player();
    player.x = newPlayerPosition.x;
    player.y = newPlayerPosition.y;
}