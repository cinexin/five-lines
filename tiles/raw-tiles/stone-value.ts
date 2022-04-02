import {RawTileValue} from "./raw-tile-value";
import {iTile} from "../iTile";
import {Stone} from "../stone";
import {Stopped} from "../state/stopped";

export class StoneValue implements RawTileValue {

    transform(): iTile {
        return new Stone(new Stopped());
    }

}