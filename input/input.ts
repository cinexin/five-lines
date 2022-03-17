import {Player} from "../player";

export interface Input {
    handle(player: Player): void;
}
