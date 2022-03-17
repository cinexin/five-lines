import {Input} from "./input";
import {Player} from "../player";

export class Left implements Input {

    handle(player: Player): void {
        player.moveHorizontal(-1);
    }
}
