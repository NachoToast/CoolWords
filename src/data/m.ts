import Word, { DifficultyRating } from '../types/Word';

const words: Word[] = [
    {
        word: 'magnanimous',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['generous'], ['forgiving'], ['charitable'], ['benevolent']],
        longAnswers: ['generous or forgiving, especially towards a rival or less powerful person.'],
    },
    {
        word: 'malaise',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['unhappiness'], ['restlessness'], ['uneasiness'], ['unease'], ['melancholy']],
        longAnswers: [
            'a general feeling of discomfort, illness, or unease whose exact cause is difficult to identify.',
        ],
    },
    {
        word: 'malefactor',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [
            ['criminal'],
            ['culprit'],
            ['offender'],
            ['villain'],
            ['lawbreaker'],
            ['law', 'breaker'],
            ['felon'],
            ['law', 'break'],
        ],
        longAnswers: ['a person who commits a crime or some other wrong.'],
    },
    {
        word: 'marred',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['spoil'],
            ['ruin'],
            ['impair'],
            ['disfigure'],
            ['scar'],
            ['ruined'],
            ['scarred'],
            ['disfigured'],
            ['impaired'],
            ['spoilted'],
            ['spoilt'],
        ],
        longAnswers: ['impair the quality or appearance of; spoil.'],
    },
    {
        word: 'materiel',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [
            ['military', 'materials'],
            ['military', 'equipment'],
        ],
        longAnswers: ['military materials and equipment.'],
    },
    {
        word: 'midriff',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['diaphragm'], ['chest', 'waist', 'between']],
        longAnswers: ['the region of the front of the body between the chest and the waist.', 'the diaphragm'],
    },
    {
        word: 'milquetoast',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['timid'], ['feeble'], ['insipid']],
        longAnswers: ['a timid or feeble person.', 'feeble, insipid, or bland.'],
    },
    {
        word: 'mirth',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['merriment'], ['high', 'spirits'], ['cheerful'], ['cheerfulness']],
        longAnswers: ['amusement, especially as expressed in laughter.'],
    },
    {
        word: 'moniker',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['name'], ['nickname'], ['alias']],
        longAnswers: ['a name.'],
    },
    {
        word: 'monogamy',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [
            ['marry', 'once'],
            ['married', 'one'],
            ['one', 'partner'],
            ['single', 'partner'],
        ],
        longAnswers: [
            'the practice of marrying or state of being married to one person at a time.',
            'the practice or state of having a sexual relationship with only one partner.',
            'the habit of having only one mate at a time.',
        ],
    },
    {
        word: 'morass',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['quagmire'],
            ['swamp'],
            ['chaos'],
            ['muddle'],
            ['tangle'],
            ['bog'],
            ['marsh'],
            ['quag', 'mire'],
        ],
        longAnswers: ['an area of muddy or boggy ground.', 'a complicated or confused situation.'],
    },
    {
        word: 'moribund',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['death', 'door'],
            ['dying'],
            ['stagnating'],
            ['expire'],
            ['expiring'],
            ['expiry'],
            ['death', 'bed'],
            ['deathbed'],
        ],
        longAnswers: [
            '(of a person) at the point of death.',
            '(of a thing) in terminal decline; lacking vitality or vigour.',
        ],
    },
    {
        word: 'motley',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['varied', 'appearance'],
            ['disparate'],
            ['colourful'],
            ['colorful'],
            ['jester', 'costume'],
            ['multicoloured'],
            ['multicolored'],
        ],
        longAnswers: [
            'incongruously varied in appearance or character; disparate.',
            '(of clothing) made up of a variety of colours.',
            'an incongruous mixture.',
            'the multicoloured costume of a jester.',
        ],
    },
];

export default words;
