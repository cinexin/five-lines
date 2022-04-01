import {IRemoveStrategy} from "./iRemove-strategy";
import {Map} from "../map";

export function removeLock(shouldRemove: IRemoveStrategy, map: Map) {
    map.removeLock(shouldRemove);
}
