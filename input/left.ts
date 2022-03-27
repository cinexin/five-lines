import {Input} from "./input";
import {Player} from "../player";
import {Map} from "../map";

export class Left implements Input {

    handle(player: Player, map: Map): void {
        player.moveHorizontal(-1, map);
    }
}
