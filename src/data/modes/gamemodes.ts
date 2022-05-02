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
                    description: `${difficultyNameMap[difficulty]} words only`,
                    pool: allWords.filter(({ difficulty: d }) => d === difficulty),
                    saveLocation: {
                        primary: GameModeNames.Difficulty,
                        secondary: difficulty,
                    },
                    nameColor: difficultyColourMap(difficulty),
                };
                return submode;
            }),
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
    [GameModeNames.Random]: {
        name: 'Random',
        description: 'Random selection of 10 words.',
        saveLocation: {
            primary: GameModeNames.Random,
            secondary: null,
        },
        additionalPoolOptions: {
            amount: 10,
        },
    },
    [GameModeNames.Difficulty]: {
        name: 'Difficulty',
        description: 'Only words of a certain difficulty',
        subModesType: GameModeNames.Difficulty,
        subModes: [
            ...new Array(5).fill(null).map((_, i) => {
                const difficulty = i as DifficultyRating;
                const submode: GameMode = {
                    name: difficultyNameMap[difficulty],
                    description: `${difficultyNameMap[difficulty]} words only`,
                    pool: allWords.filter(({ difficulty: d }) => d === difficulty),
                    saveLocation: {
                        primary: GameModeNames.Difficulty,
                        secondary: difficulty,
                    },
                    nameColor: difficultyColourMap(difficulty),
                };
                return submode;
            }),
        ],
    },
};

export default gameModes;
