import {RawTileValue} from "./raw-tile-value";
import {iTile} from "../iTile";
import {Lock} from "../lock";
import {BLUE_KEY} from "../../map";

export class Lock2Value implements RawTileValue {

    transform(): iTile {
        return new Lock(BLUE_KEY);
    }

}