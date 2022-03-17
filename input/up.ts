import {Input} from "./input";
import {Player} from "../player";

export class Up implements Input {

    handle(player: Player) {
        player.moveVertical(-1)
    }
}
