import {IRemoveStrategy} from "./iRemove-strategy";
import {TILE_SIZE} from "../config";
import {Map} from "../map";

export class KeyConfiguration {
    constructor(
        private color: string,
        private _1: boolean,
        private removeStrategy: IRemoveStrategy
    ) {
    }

    coloring(g: CanvasRenderingContext2D, x, y) {
        g.fillStyle = this.color;
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    is1(): boolean {
        return this._1;
    }

    removeLock(map: Map) {
        map.removeLock(this.removeStrategy);
    }
}
