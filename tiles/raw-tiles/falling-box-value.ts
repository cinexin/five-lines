import {RawTileValue} from "./raw-tile-value";
import {iTile} from "../iTile";
import {Falling} from "../state/falling";
import {Box} from "../box";

export class FallingBoxValue implements RawTileValue {

    transform(): iTile {
        return new Box(new Falling());
    }

}