import DifficultyRating from './Difficulty';
import { GameModeNames } from './GameMode';

export interface BestScore {
    got: number;
    outOf: number;
    at: number;
}

export interface GameHistory {
    [GameModeNames.Streak]: Record<DifficultyRating | 'random', BestScore | undefined>;
    [GameModeNames.Letters]: Record<string, BestScore | undefined>;
    [GameModeNames.Random]: BestScore | undefined;
}

/** A function that gets the best score for a given game mode. */
export type ScoreHistoryGetter = (gameMode: GameModeNames) => BestScore | undefined;

/** A function that sets the best score for a given game mode. */
export type ScoreHistorySetter = (gameMode: GameModeNames, newValue: BestScore) => void;
