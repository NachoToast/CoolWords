import DifficultyRating from '../types/Difficulty';
import { BestScore, GameHistory } from '../types/GameHistory';
import { GameModeNames, GameModeSingle } from '../types/GameMode';

abstract class ScoreHelpers {
    public static saveScore(
        history: GameHistory,
        newBest: BestScore,
        saveLocation: GameModeSingle['saveLocation'],
    ): GameHistory {
        switch (saveLocation.primary) {
            case GameModeNames.Letters:
                return this.saveLetter(history, newBest, saveLocation.secondary as string);
            case GameModeNames.Streak:
                return this.saveStreak(history, newBest, saveLocation.secondary as DifficultyRating | 'random');
            case GameModeNames.Random:
                return this.saveRandom(history, newBest);
            default:
                console.warn(
                    `Unrecognized save location, primary: ${saveLocation.primary}, secondary: ${saveLocation.secondary}`,
                );
                return this.saveUnknown(history, newBest, saveLocation.primary);
        }
    }

    private static saveStreak(
        history: GameHistory,
        newBest: BestScore,
        helper: DifficultyRating | 'random',
    ): GameHistory {
        history[GameModeNames.Streak][helper] = newBest;
        return history;
    }

    private static saveLetter(history: GameHistory, newBest: BestScore, helper: string): GameHistory {
        history[GameModeNames.Letters][helper] = newBest;
        return history;
    }

    private static saveRandom(history: GameHistory, newBest: BestScore): GameHistory {
        history[GameModeNames.Random] = newBest;
        return history;
    }

    private static saveUnknown(history: GameHistory, newBest: BestScore, key: unknown): GameHistory {
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            history = { ...history, [key]: newBest };
        } catch (error) {
            //
        }
        return history;
    }

    public static getScore(history: GameHistory, saveLocation: GameModeSingle['saveLocation']): BestScore | undefined {
        switch (saveLocation.primary) {
            case GameModeNames.Letters:
                return this.getLetter(history, saveLocation.secondary as string);
            case GameModeNames.Streak:
                return this.getStreak(history, saveLocation.secondary as DifficultyRating | 'random');
            case GameModeNames.Random:
                return this.getRandom(history);
            default:
                console.warn(
                    `Unrecognized get location, primary: ${saveLocation.primary}, secondary: ${saveLocation.secondary}`,
                );
                return this.getUnknown(history, saveLocation.primary);
        }
    }

    private static getStreak(history: GameHistory, helper: string | number): BestScore | undefined {
        return history[GameModeNames.Streak][helper as DifficultyRating | 'random'];
    }

    private static getLetter(history: GameHistory, helper: string | number): BestScore | undefined {
        return history[GameModeNames.Letters][helper];
    }

    private static getRandom(history: GameHistory): BestScore | undefined {
        return history[GameModeNames.Random];
    }

    private static getUnknown(history: GameHistory, key: unknown): BestScore | undefined {
        try {
            return history[key as GameModeNames.Random];
        } catch (error) {
            return undefined;
        }
    }
}

export default ScoreHelpers;
