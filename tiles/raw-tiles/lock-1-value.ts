import {RawTileValue} from "./raw-tile-value";
import {iTile} from "../iTile";
import {Lock} from "../lock";
import {YELLOW_KEY} from "../../map";

export class Lock1Value implements RawTileValue {

    transform(): iTile {
        return new Lock(YELLOW_KEY);
    }

}