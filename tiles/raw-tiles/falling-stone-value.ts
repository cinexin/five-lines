import {RawTileValue} from "./raw-tile-value";
import {iTile} from "../iTile";
import {Stone} from "../stone";
import {Falling} from "../state/falling";

export class FallingStoneValue implements RawTileValue{

    transform(): iTile {
        return new Stone(new Falling());
    }

}