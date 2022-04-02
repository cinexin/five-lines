import {RawTileValue} from "./raw-tile-value";
import {AirValue} from "./air-value";
import {FluxValue} from "./flux-value";
import {UnbreakableValue} from "./unbreakable-value";
import {StoneValue} from "./stone-value";
import {FallingStoneValue} from "./falling-stone-value";
import {BoxValue} from "./box-value";
import {FallingBoxValue} from "./falling-box-value";
import {Key1Value} from "./key-1-value";
import {Key2Value} from "./key-2-value";
import {Lock1Value} from "./lock-1-value";
import {Lock2Value} from "./lock-2-value";
import {PlayerValue} from "./player-value";
import {iTile} from "../iTile";

export class RawTile {
    static readonly AIR = new RawTile(new AirValue());
    static readonly FLUX = new RawTile(new FluxValue());
    static readonly UNBREAKABLE = new RawTile(new UnbreakableValue());
    static readonly PLAYER = new RawTile(new PlayerValue());
    static readonly STONE = new RawTile(new StoneValue());
    static readonly FALLING_STONE = new RawTile(new FallingStoneValue());
    static readonly BOX = new RawTile(new BoxValue());
    static readonly FALLING_BOX = new RawTile(new FallingBoxValue());
    static readonly KEY1 = new RawTile(new Key1Value());
    static readonly KEY2 = new RawTile(new Key2Value());
    static readonly LOCK1 = new RawTile(new Lock1Value());
    static readonly LOCK2 = new RawTile(new Lock2Value());

    private constructor(
        private value: RawTileValue
    ) {
    }

    transform(): iTile {
        return this.value.transform();
    }
}