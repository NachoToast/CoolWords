import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'beget',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['bring', 'by', 'reproduction'],
            ['bring', 'existence', 'reproduction'],
            ['father'],
            ['cause'],
            ['bring', 'about'],
        ],
        longAnswers: [
            '(especially of a man) bring (a child) into existence by the process of reproduction.',
            'cause; bring about.',
        ],
    },
];

export default words;
