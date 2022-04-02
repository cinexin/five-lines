import {RawTileValue} from "./raw-tile-value";
import {iTile} from "../iTile";
import {PlayerTile} from "../player-tile";

export class PlayerValue implements RawTileValue {

    transform(): iTile {
        return new PlayerTile();
    }

}