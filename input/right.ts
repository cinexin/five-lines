import {Input} from "./input";
import {Player} from "../player";

export class Right implements Input {

    handle(player: Player) {
        player.moveHorizontal(1);
    }
}
