import DifficultyRating from '../types/Difficulty';
import { BestScore, GameHistory } from '../types/GameHistory';
import { GameModeNames, GameModeSingle } from '../types/GameMode';

abstract class ScoreHelpers {
    public static saveScore(
        history: GameHistory,
        newBest: BestScore,
        saveLocation: GameModeSingle['saveLocation'],
    ): GameHistory {
        try {
            const { primary, secondary } = saveLocation;

            switch (primary) {
                case GameModeNames.Letters:
                    history[GameModeNames.Letters][secondary as string] = newBest;
                    break;
                case GameModeNames.Streak:
                case GameModeNames.Fixed10:
                    history[primary][secondary as DifficultyRating | 'random'] = newBest;
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
        } catch (error) {
            console.error(error);
            localStorage.removeItem('words_game_history');
            return history;
        }
    }

    public static getScore(history: GameHistory, saveLocation: GameModeSingle['saveLocation']): BestScore | undefined {
        try {
            const { primary, secondary } = saveLocation;

            switch (primary) {
                case GameModeNames.Letters:
                case GameModeNames.Streak:
                case GameModeNames.Fixed10:
                    return history[primary][secondary as DifficultyRating | 'random'];
                default:
                    console.warn(
                        `Unrecognized get location, primary: ${saveLocation.primary}, secondary: ${saveLocation.secondary}`,
                    );
                    try {
                        return history[primary];
                    } catch (error) {
                        return undefined;
                    }
            }
        } catch (error) {
            console.error(error);
            localStorage.removeItem('words_game_history');
            return undefined;
        }
    }
}

export default ScoreHelpers;
