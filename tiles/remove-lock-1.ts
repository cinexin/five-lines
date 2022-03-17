import {iTile} from "./iTile";
import {IRemoveStrategy} from "./iRemove-strategy";

export class RemoveLock1 implements IRemoveStrategy{

    check(tile: iTile): boolean {
        return tile.isLock1();
    }
}
