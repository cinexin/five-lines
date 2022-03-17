import {IRemoveStrategy} from "./iRemove-strategy";

export class KeyConfiguration {
    constructor(
        private color: string,
        private _1: boolean,
        private removeStrategy: IRemoveStrategy
    ) {
    }

    getColor(): string {
        return this.color;
    }

    is1(): boolean {
        return this._1;
    }

    getRemoveStrategy(): IRemoveStrategy {
        return this.removeStrategy;
    }
}
