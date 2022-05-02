import Word from './Word';

export enum GameModeNames {
    Streak,
    Letters,
    Fixed10,
}

interface GameModeBase {
    name: string;
    description: string;
    nameColor?: string;
    subModes?: GameMode[];
}

export interface GameModeMultiple extends GameModeBase {
    subModes: GameMode[];
    subModesType: GameModeNames;
}

export interface GameModeSingle extends GameModeBase {
    subModes?: undefined;
    /** If omitted, will use the whole pool. */
    pool?: Word[];

    additionalPoolOptions?: {
        amount?: number;
    };

    /** If included, pool will not be shuffled. */
    noShuffle?: boolean;

    saveLocation: {
        primary: GameModeNames;
        secondary: string | number | null;
    };
}

export type GameMode = GameModeSingle | GameModeMultiple;
