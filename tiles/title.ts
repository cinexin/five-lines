export interface Tile {
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
}
