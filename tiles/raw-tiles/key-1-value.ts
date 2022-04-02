import {RawTileValue} from "./raw-tile-value";
import {iTile} from "../iTile";
import {Key} from "../key";
import {YELLOW_KEY} from "../../map";

export class Key1Value implements RawTileValue {

    transform(): iTile {
        return new Key(YELLOW_KEY);
    }

}