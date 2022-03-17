import {IRemoveStrategy} from "./iRemove-strategy";
import {iTile} from "./iTile";

export class RemoveLock2 implements IRemoveStrategy{

    check(tile: iTile): boolean {
        return tile.isLock2();
    }
}
