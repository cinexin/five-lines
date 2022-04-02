import {RawTileValue} from "./raw-tile-value";
import {iTile} from "../iTile";
import {Unbreakable} from "../unbreakable";

export class UnbreakableValue implements RawTileValue {

    transform(): iTile {
        return new Unbreakable();
    }
    
}