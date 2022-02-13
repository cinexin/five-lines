export interface Input {
    isRight(): boolean;
    isLeft(): boolean;
    isUp(): boolean;
    isDown(): boolean;
    handle(): void;
}
