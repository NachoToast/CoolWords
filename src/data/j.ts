import Word, { DifficultyRating } from '../types/Word';

const words: Word[] = [
    {
        word: 'jettison',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [
            ['throw', 'ship'],
            ['throw', 'aircraft'],
            ['drop', 'ship'],
            ['drop', 'aircraft'],
            ['abandon'],
            ['discard'],
            ['get', 'rid', 'of'],
        ],
        longAnswers: [
            'throw or drop (something) from an aircraft or ship.',
            'abandon or discard (someone or something that is no longer wanted).',
        ],
    },
];

export default words;
