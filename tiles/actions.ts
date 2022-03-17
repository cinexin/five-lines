import {Air} from "./air";
import {map} from "../map";
import {IRemoveStrategy} from "./iRemove-strategy";

export function removeLock(shouldRemove: IRemoveStrategy) {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (shouldRemove.check(map[y][x])) {
                map[y][x] = new Air();
            }
        }
    }
}
