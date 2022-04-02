import {RawTileValue} from "./raw-tile-value";
import {iTile} from "../iTile";
import {Key} from "../key";
import {BLUE_KEY} from "../../map";

export class Key2Value implements RawTileValue {

    transform(): iTile {
        return new Key(BLUE_KEY);
    }

}