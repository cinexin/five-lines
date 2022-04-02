import {RawTileValue} from "./raw-tile-value";
import {iTile} from "../iTile";
import {Box} from "../box";
import {Stopped} from "../state/stopped";

export class BoxValue implements RawTileValue {

    transform(): iTile {
        return new Box(new Stopped());
    }
    
}