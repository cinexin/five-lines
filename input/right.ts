import {Input} from "./input";
import {Player} from "../player";
import {Map} from "../map";

export class Right implements Input {

    handle(player: Player, map: Map) {
        player.moveHorizontal(1, map);
    }
}
