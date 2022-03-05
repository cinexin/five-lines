export interface iTile {
    isAir(): boolean;
    isFlux(): boolean;
    isUnbreakable(): boolean;
    isPlayer(): boolean;
    isStone(): boolean;
    isFallingStone(): boolean;
    isBox(): boolean;
    isFallingBox(): boolean;
    isKey1(): boolean;
    isLock1(): boolean;
    isKey2(): boolean;
    isLock2(): boolean;

    color(): string;

    draw(g: CanvasRenderingContext2D, x: number, y: number);
}
