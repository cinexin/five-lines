export interface iTile {
    isAir(): boolean;
    isBox(): boolean;
    isFallingStone(): boolean;
    isFallingBox(): boolean;
    isFalling(): boolean;
    isStony(): boolean;
    isBoxy(): boolean;
    canFall(): boolean;
    isLock1(): boolean;
    isLock2(): boolean;
    isStone(): boolean;
    color(): string;

    draw(g: CanvasRenderingContext2D, x: number, y: number);
    moveHorizontal(dx: number): void;
    moveVertical(dy: number): void;

    drop();
    stopDropping();

    update(x: number, y: number);
}
