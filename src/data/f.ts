import Word, { DifficultyRating } from '../types/Word';

const words: Word[] = [
    {
        word: 'facula',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [
            ['bright', 'spot'],
            ['bright', 'area'],
            ['bright', 'point'],
            ['bright', 'region'],
        ],
        longAnswers: [
            'a bright region on the surface of the sun, linked to the subsequent appearance of sunspots in the same area.',
            'a bright spot on the surface of a planet.',
        ],
    },
    {
        word: 'fenestrated',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['windows'],
            ['window'],
            ['preforated'],
            ['preforations'],
            ['holes', 'having'],
            ['having', 'gaps'],
        ],
        longAnswers: ['provided with a window or windows.', 'having perforations, apertures, or transparent areas.'],
    },
    {
        word: 'frenetic',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['frantic'], ['wild'], ['frenzied'], ['feverish'], ['mad'], ['hectic']],
        longAnswers: ['fast and energetic in a rather wild and uncontrolled way.'],
    },
    {
        word: 'fumigated',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [
            ['disinfect', 'chemicals'],
            ['purify', 'chemicals'],
            ['clean', 'chemicals'],
        ],
        longAnswers: ['disinfect or purify (an area) with the fumes of certain chemicals.'],
    },
];

export default words;
