import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'parastatal',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['indirect', 'state'],
            ['authority', 'state'],
        ],
        longAnswers: [
            '(of an organization or industry, especially in some African countries) having some political authority and serving the state indirectly.',
        ],
    },
    {
        word: 'parity',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['even', 'odd'], ['equal'], ['equivalent']],
        longAnswers: [
            'the state or condition of being equal, especially as regards status or pay.',
            '(of a number) the fact of being even or odd.',
        ],
    },
    {
        word: 'parlance',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['jargon'], ['language'], ['particular', 'speak'], ['particular', 'speaking']],
        longAnswers: [
            'a particular way of speaking or using words, especially a way common to those with a particular job or interest.',
        ],
    },
    {
        word: 'parvenu',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [
            ['humble', 'rich'],
            ['poor', 'rich'],
            ['upbringing'],
            ['upbringings'],
            ['origin', 'wealth'],
            ['origin', 'rich'],
        ],
        longAnswers: ['a person of humble origin who has gained wealth, influence, or celebrity.'],
    },
    {
        word: 'pious',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['religious'], ['devout'], ['devoted'], ['dedicated'], ['reverent'], ['sincere'], ['vain']],
        longAnswers: ['devoutly religious.', '(of a hope) sincere but unlikely to be fulfilled.'],
    },
    {
        word: 'plutocrat',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['capitalist'],
            ['tycoon'],
            ['millionaire'],
            ['billionaire'],
            ['trillionaire'],
            ['wealth'],
            ['wealthy'],
        ],
        longAnswers: ['a person whose power derives from their wealth.'],
    },
    {
        word: 'postulated',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['put', 'forward'], ['suggest'], ['advance'], ['assume']],
        longAnswers: [
            'suggest or assume the existence, fact, or truth of (something) as a basis for reasoning, discussion, or belief.',
            '(in ecclesiastical law) nominate or elect (someone) to an ecclesiastical office subject to the sanction of a higher authority.',
        ],
    },
    {
        word: 'procyonine',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [['raccoon'], ['raccoon-like']],
        longAnswers: ['Of, or pertaining to, a raccoon.', 'Reccoon-like'],
    },
    {
        word: 'progenitor',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['ancestor'],
            ['forefather'],
            ['parent'],
            ['originator'],
            ['founder'],
            ['source'],
            ['instigator'],
            ['predecessor'],
        ],
        longAnswers: [
            'a person or thing from which a person, animal, or plant is descended or originates; an ancestor or parent.',
            'a person who originates a cultural or intellectual movement.',
        ],
    },
    {
        word: 'propensity',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['tendency'], ['inclination'], ['predisposition']],
        longAnswers: ['an inclination or natural tendency to behave in a particular way.'],
    },
    {
        word: 'pyrrhic',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [
            ['great', 'cost'],
            ['but', 'at', 'what', 'cost'],
            ['victory', 'but'],
        ],
        longAnswers: ['(of a victory) won at too great a cost to have been worthwhile for the victor.'],
    },
];

export default words;
