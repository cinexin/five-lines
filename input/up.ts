import {Input} from "./input";
import {Player} from "../player";
import {Map} from "../map";

export class Up implements Input {

    handle(player: Player, map: Map) {
        player.moveVertical(-1, map)
    }
}
