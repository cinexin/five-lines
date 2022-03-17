import {Input} from "./input";
import {map} from "../map";
import {Player} from "../player";

export class Down implements Input {

    handle(player: Player): void {
        map[player.getPosition().y + 1][player.getPosition().x].moveVertical(player,1);
    }

}
