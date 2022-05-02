import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'sagacious',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['wise'], ['clever'], ['intelligent'], ['knowledgeable'], ['good', 'judgement'], ['shrewd']],
        longAnswers: ['having or showing keen mental discernment and good judgement; wise or shrewd.'],
    },
    {
        word: 'sanctimonious',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['self-righteous'], ['self', 'righteous'], ['pious'], ['arrogant'], ['smug'], ['superior']],
        longAnswers: ['making a show of being morally superior to other people.'],
    },
    {
        word: 'sartorial',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [['tailor'], ['tailoring'], ['style', 'clothing']],
        longAnswers: ['relating to tailoring, clothes, or style of dress.'],
    },
    {
        word: 'scintillating',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['sparkling'],
            ['shining'],
            ['bright'],
            ['brilliant'],
            ['gleaming'],
            ['glittering'],
            ['twinkling'],
            ['exciting'],
            ['dazzling'],
            ['exhilarating'],
        ],
        longAnswers: ['sparkling or shining brightly.', 'brilliantly and excitingly clever or skilful.'],
    },
    {
        word: 'serendipities',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['chance'], ['happy'], ['accident'], ['fluke'], ['luck']],
        longAnswers: ['the occurrence and development of events by chance in a happy or beneficial way.'],
    },
    {
        word: 'shored',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [
            ['support'],
            ['prop', 'up'],
            ['bolster'],
            ['brace'],
            ['buttress'],
            ['strengthen'],
            ['assist'],
            ['props'],
            ['beams'],
        ],
        longAnswers: [
            'support or hold up something with props or beams.',
            'support or assist something that would otherwise fail or decline.',
        ],
    },
    {
        word: 'slovenly',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['scruffy'],
            ['untidy'],
            ['messy'],
            ['unkempt'],
            ['dishevelled'],
            ['careless'],
            ['disorganized'],
            ['unorganized'],
        ],
        longAnswers: [
            '(especially of a person or their appearance) untidy and dirty.',
            '(especially of a person or action) careless; excessively casual.',
        ],
    },
    {
        word: 'sojourn',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['temporary', 'stay'], ['visit'], ['stopover'], ['vacation']],
        longAnswers: ['a temporary stay.', 'stay somewhere temporarily.', 'Vivian Chase'],
    },
    {
        word: 'spurn',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['refuse'], ['decline'], ['reject'], ['rebuff'], ['scorn'], ['turn', 'down']],
        longAnswers: ['reject with disdain or contempt.'],
    },
    {
        word: 'supplication',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['plea'], ['appeal'], ['petition'], ['solicitation'], ['urge']],
        longAnswers: ['the action of asking or begging for something earnestly or humbly.'],
    },
];

export default words;
