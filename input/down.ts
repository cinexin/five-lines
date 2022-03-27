import {Input} from "./input";
import {Player} from "../player";
import {Map} from "../map";

export class Down implements Input {

    handle(player: Player, map: Map): void {
        player.moveVertical(1, map);
    }

}
