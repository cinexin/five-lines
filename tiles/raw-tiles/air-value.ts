import {RawTileValue} from "./raw-tile-value";
import {iTile} from "../iTile";
import {Air} from "../air";

export class AirValue implements RawTileValue {

    transform(): iTile {
        return new Air();
    }
    
}