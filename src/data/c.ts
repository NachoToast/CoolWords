import Word, { DifficultyRating } from '../types/Word';

const words: Word[] = [
    {
        word: 'castigate',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['reprimand', 'severly']],
        longAnswers: ['reprimand (someone) severely.'],
    },
    {
        word: 'chagrin',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [
            ['feel', 'distress'],
            ['feeling', 'distress'],
            ['distress', 'humiliated'],
            ['annoyance', 'distress'],
            ['annoyance', 'humiliated'],
        ],
        longAnswers: ['annoyance or distress at having failed or been humiliated.', 'feel distressed or humiliated.'],
    },
    {
        word: 'chauvinism',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [
            ['extreme', 'patriotism'],
            ['exaggerated', 'patriotism'],
            ['extreme', 'support', 'own'],
            ['extreme', 'support', 'one'],
        ],
        longAnswers: [
            'exaggerated or aggressive patriotism.',
            "excessive or prejudiced support for one's own cause, group, or sex.",
        ],
    },
    {
        word: 'chthonic',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [
            ['inhabiting', 'underworld'],
            ['relating', 'underworld'],
            ['inhabiting', 'hell'],
            ['relating', 'hell'],
        ],
        longAnswers: ['relating to or inhabiting the underworld.'],
    },
    {
        word: 'circumspect',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['wary', 'risks'], ['unwilling', 'risks'], ['cautious'], ['careful']],
        longAnswers: ['wary and unwilling to take risks'],
    },
    {
        word: 'conducive',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['help', 'in'], ['instrumental'], ['to', 'produce']],
        longAnswers: ['making a certain situation or outcome likely or possible.'],
    },
    {
        word: 'conferred',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['discuss'], ['discussion'], ['grant'], ['bestow'], ['award'], ['present']],
        longAnswers: ['grant (a title, degree, benefit, or right).', 'have discussions; exchange opinions.'],
    },
    {
        word: 'conflagration',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [
            ['large', 'fire'],
            ['extensive', 'fire'],
            ['damaging', 'fire'],
        ],
        longAnswers: ['an extensive fire which destroys a great deal of land or property.'],
    },
    {
        word: 'conniving',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['conspiring'], ['plotting'], ['colluding']],
        longAnswers: ['given to or involved in conspiring to do something immoral, illegal, or harmful.'],
    },
    {
        word: 'consternation',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['anxiety'], ['dismay'], ['distress']],
        longAnswers: ['a feeling of anxiety or dismay, typically at something unexpected.'],
    },
    {
        word: 'convalescence',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['time', 'recover'],
            ['time', 'recovery'],
            ['time', 'recovering'],
            ['recuperate'],
            ['recuperation'],
            ['time', 'better'],
        ],
        longAnswers: ['time spent recovering from an illness or medical treatment; recuperation.'],
    },
    {
        word: 'countenance',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['face'],
            ['expression'],
            ['facial'],
            ['support'],
            ['approve'],
            ['approval'],
            ['admit', 'possible'],
            ['accept', 'possible'],
        ],
        longAnswers: [
            "a person's face or facial expression.",
            'support or approval.',
            'admit as acceptable or possible.',
        ],
    },
    {
        word: 'curmudgeon',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['bad', 'temper'], ['aggressive']],
        longAnswers: ['a bad-tempered person, especially an old one.'],
    },
];

export default words;
