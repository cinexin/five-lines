import {Input} from "./input";
import {Player} from "../player";

export class Down implements Input {

    handle(player: Player): void {
        player.moveVertical(1);
    }

}
