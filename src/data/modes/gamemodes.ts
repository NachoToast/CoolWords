import { difficultyColourMap, difficultyNameMap } from '../../helpers/difficultyMaps';
import DifficultyRating from '../../types/Difficulty';
import { GameMode, GameModeNames } from '../../types/GameMode';
import allWords, { wordLetterMap } from '../words';

const gameModes: Record<GameModeNames, GameMode> = {
    [GameModeNames.Streak]: {
        subModesType: GameModeNames.Streak,
        name: 'Streak',
        description: 'Keep going until you get a definition wrong.',
        subModes: [
            ...new Array(5).fill(null).map((_, i) => {
                const difficulty = i as DifficultyRating;
                const submode: GameMode = {
                    name: difficultyNameMap[difficulty],
                    description: `${difficultyNameMap[difficulty]} words only.`,
                    pool: allWords.filter(({ difficulty: d }) => d === difficulty),
                    saveLocation: {
                        primary: GameModeNames.Streak,
                        secondary: difficulty,
                    },
                    nameColor: difficultyColourMap(difficulty),
                };
                return submode;
            }),
            {
                name: 'Random',
                description: 'Random word difficulty.',
                nameColor: 'purple',
                saveLocation: {
                    primary: GameModeNames.Streak,
                    secondary: 'random',
                },
            },
        ],
    },
    [GameModeNames.Letters]: {
        subModesType: GameModeNames.Letters,
        name: 'Letters',
        description: 'Only words beginning with a certain letter.',
        subModes: [
            ...new Array(26).fill(null).map((_, i) => {
                const letter = String.fromCharCode(97 + i); // a-z
                const submode: GameMode = {
                    name: letter.toUpperCase(),
                    description: `Words beginning with ${letter}.`,
                    pool: wordLetterMap[letter],
                    saveLocation: {
                        primary: GameModeNames.Letters,
                        secondary: letter,
                    },
                };
                return submode;
            }),
        ],
    },
    [GameModeNames.Fixed10]: {
        name: 'Fixed Amount',
        description: '10 randomly chosen words',
        subModesType: GameModeNames.Fixed10,
        subModes: [
            ...new Array(5).fill(null).map((_, i) => {
                const difficulty = i as DifficultyRating;
                const submode: GameMode = {
                    name: difficultyNameMap[difficulty],
                    description: `10 ${difficultyNameMap[difficulty].toLowerCase()} words.`,
                    pool: allWords.filter(({ difficulty: d }) => d === difficulty),
                    saveLocation: {
                        primary: GameModeNames.Fixed10,
                        secondary: difficulty,
                    },
                    nameColor: difficultyColourMap(difficulty),
                    additionalPoolOptions: {
                        amount: 10,
                    },
                };
                return submode;
            }),
            {
                name: 'Random',
                description: '10 words of varying difficulty.',
                nameColor: 'purple',
                saveLocation: {
                    primary: GameModeNames.Fixed10,
                    secondary: 'random',
                },
                additionalPoolOptions: {
                    amount: 10,
                },
            },
        ],
    },
};

export default gameModes;
