export interface iTile {
    isAir(): boolean;
    isBox(): boolean;
    isFallingStone(): boolean;
    isFallingBox(): boolean;
    isLock1(): boolean;
    isLock2(): boolean;
    isStone(): boolean;
    color(): string;

    draw(g: CanvasRenderingContext2D, x: number, y: number);
    moveHorizontal(dx: number): void;
    moveVertical(dy: number): void;
}
