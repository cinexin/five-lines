import {RawTileValue} from "./raw-tile-value";
import {iTile} from "../iTile";
import {Flux} from "../flux";

export class FluxValue implements RawTileValue {

    transform(): iTile {
        return new Flux();
    }
    
}