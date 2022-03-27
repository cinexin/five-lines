import {Air} from "./air";
import {IRemoveStrategy} from "./iRemove-strategy";
import {Map} from "../map";

export function removeLock(shouldRemove: IRemoveStrategy, map: Map) {
    for (let y = 0; y < map.getMap().length; y++) {
        for (let x = 0; x < map.getMap()[y].length; x++) {
            if (shouldRemove.check(map.getMap()[y][x])) {
                map.getMap()[y][x] = new Air();
            }
        }
    }
}
