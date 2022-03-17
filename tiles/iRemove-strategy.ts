import {iTile} from "./iTile";

export interface IRemoveStrategy {
    check(tile: iTile): boolean;
}
