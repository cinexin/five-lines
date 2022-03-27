export const TILE_SIZE = 30;
export const FPS = 30;
export const SLEEP = 1000 / FPS;

export enum RawTile {
    AIR,
    FLUX,
    UNBREAKABLE,
    PLAYER,
    STONE,
    FALLING_STONE,
    BOX,
    FALLING_BOX,
    KEY1,
    LOCK1,
    KEY2,
    LOCK2
}

export const rawMap: RawTile[][] = [
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 3, 0, 1, 1, 2, 0, 2],
    [2, 4, 2, 6, 1, 2, 0, 2],
    [2, 8, 4, 1, 1, 2, 0, 2],
    [2, 4, 1, 1, 1, 9, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
];
