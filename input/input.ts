import {Player} from "../player";
import {Map} from "../map";

export interface Input {
    handle(player: Player, map: Map): void;
}
