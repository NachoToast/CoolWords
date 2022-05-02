import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'kowtow',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['grovel'], ['act', 'subservient'], ['kneel']],
        longAnswers: [
            'act in an excessively subservient manner.',
            'kneel and touch the ground with the forehead in worship or submission as part of Chinese custom.',
        ],
    },
];

export default words;
