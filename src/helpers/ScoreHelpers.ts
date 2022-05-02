import DifficultyRating from '../types/Difficulty';
import { BestScore, GameHistory } from '../types/GameHistory';
import { GameModeNames, GameModeSingle } from '../types/GameMode';

abstract class ScoreHelpers {
    public static saveScore(
        history: GameHistory,
        newBest: BestScore,
        saveLocation: GameModeSingle['saveLocation'],
    ): GameHistory {
        const { primary, secondary } = saveLocation;

        switch (primary) {
            case GameModeNames.Letters:
                history[GameModeNames.Letters][secondary as string] = newBest;
                break;
            case GameModeNames.Streak:
            case GameModeNames.Difficulty:
                history[primary][secondary as DifficultyRating | 'random'] = newBest;
                break;
            case GameModeNames.Random:
                history[GameModeNames.Random] = newBest;
                break;
            default:
                console.warn(
                    `Unrecognized save location, primary: ${saveLocation.primary}, secondary: ${saveLocation.secondary}`,
                );
                try {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    history = { ...history, [key]: newBest };
                } catch (error) {
                    //
                }
                break;
        }

        return history;
    }

    public static getScore(history: GameHistory, saveLocation: GameModeSingle['saveLocation']): BestScore | undefined {
        const { primary, secondary } = saveLocation;

        switch (primary) {
            case GameModeNames.Letters:
            case GameModeNames.Streak:
            case GameModeNames.Difficulty:
                return history[primary][secondary as DifficultyRating | 'random'];
            case GameModeNames.Random:
                return history[GameModeNames.Random];
            default:
                console.warn(
                    `Unrecognized get location, primary: ${saveLocation.primary}, secondary: ${saveLocation.secondary}`,
                );
                try {
                    return history[primary as GameModeNames.Random];
                } catch (error) {
                    return undefined;
                }
        }
    }
}

export default ScoreHelpers;
