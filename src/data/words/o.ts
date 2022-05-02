import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'obviates',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['remove'], ['avoid'], ['prevent']],
        longAnswers: ['remove (a need or difficulty).', 'avoid or prevent (something undesirable).'],
    },
    {
        word: 'oenophile',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['wine']],
        longAnswers: ['a connoisseur of wines.'],
    },
    {
        word: 'olfactory',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['smell']],
        longAnswers: ['relating to the sense of smell.'],
    },
    {
        word: 'ombudsman',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [
            ['official', 'investigate'],
            ['complaint', 'investigator'],
            ['official', 'investigator'],
        ],
        longAnswers: [
            "an official appointed to investigate individuals' complaints against a company or organization, especially a public authority.",
        ],
    },
    {
        word: 'opulent',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['luxury'], ['luxurious'], ['ostentatious'], ['wealthy'], ['rich']],
        longAnswers: ['ostentatiously costly and luxurious.', 'wealthy.'],
    },
    {
        word: 'ostensibly',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['apparently'], ['seemingly']],
        longAnswers: ['as appears or is stated to be true, though not necessarily so; apparently.'],
    },
    {
        word: 'ostentation',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['show'], ['showing', 'off'], ['pretentious'], ['pretentiousness']],
        longAnswers: ['the pretentious or showy display of wealth and luxury, designed to impress.'],
    },
];

export default words;
