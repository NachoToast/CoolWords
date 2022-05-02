import { difficultyColourMap } from '../../helpers/difficultyMaps';
import DifficultyRating from '../../types/Difficulty';
import { GameMode, GameModeNames } from '../../types/GameMode';
import allWords, { wordLetterMap } from '../words';

const gameModes: Record<GameModeNames, GameMode> = {
    [GameModeNames.Streak]: {
        subModesType: GameModeNames.Streak,
        name: 'Streak',
        description: 'Keep going until you get a definition wrong.',
        subModes: [
            {
                name: 'Very Easy',
                description: 'Very easy words only.',
                pool: allWords.filter(({ difficulty }) => difficulty === DifficultyRating.VeryEasy),
                nameColor: difficultyColourMap(DifficultyRating.VeryEasy),
                saveLocation: {
                    primary: GameModeNames.Streak,
                    secondary: DifficultyRating.VeryEasy,
                },
            },
            {
                name: 'Easy',
                description: 'Easy words only.',
                pool: allWords.filter(({ difficulty }) => difficulty === DifficultyRating.Easy),
                nameColor: difficultyColourMap(DifficultyRating.Easy),
                saveLocation: {
                    primary: GameModeNames.Streak,
                    secondary: DifficultyRating.Easy,
                },
            },
            {
                name: 'Medium',
                description: 'Medium words only.',
                pool: allWords.filter(({ difficulty }) => difficulty === DifficultyRating.Medium),
                nameColor: difficultyColourMap(DifficultyRating.Medium),
                saveLocation: {
                    primary: GameModeNames.Streak,
                    secondary: DifficultyRating.Medium,
                },
            },
            {
                name: 'Hard',
                description: 'Hard words only.',
                pool: allWords.filter(({ difficulty }) => difficulty === DifficultyRating.Hard),
                nameColor: difficultyColourMap(DifficultyRating.Hard),
                saveLocation: {
                    primary: GameModeNames.Streak,
                    secondary: DifficultyRating.Hard,
                },
            },
            {
                name: 'Very hard',
                description: 'Very hard words only.',
                pool: allWords.filter(({ difficulty }) => difficulty === DifficultyRating.VeryHard),
                nameColor: difficultyColourMap(DifficultyRating.VeryHard),
                saveLocation: {
                    primary: GameModeNames.Streak,
                    secondary: DifficultyRating.VeryHard,
                },
            },
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
};

export default gameModes;
