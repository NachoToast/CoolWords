import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'vacillate',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['dither'], ['indecisive'], ['waver'], ['undecided'], ['uncertain']],
        longAnswers: ['waver between different opinions or actions; be indecisive.'],
    },
    {
        word: 'vacuous',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['empty'], ['blank'], ['vacant'], ['deadpan'], ['inexpressive']],
        longAnswers: ['having or showing a lack of thought or intelligence; mindless.', 'empty'],
    },
    {
        word: 'venerable',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['respected'],
            ['revered'],
            ['worshipped'],
            ['honoured'],
            ['archdeacon'],
            ['deacon'],
            ['respect'],
        ],
        longAnswers: [
            'accorded a great deal of respect, especially because of age, wisdom, or character.',
            '(in the Anglican Church) a title given to an archdeacon.',
            '(in the Roman Catholic Church) a title given to a deceased person who has attained a certain degree of sanctity but has not been fully beatified or canonized.',
        ],
    },
    {
        word: 'verisimilitude',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['true'], ['real']],
        longAnswers: ['the appearance of being true or real.'],
    },
    {
        word: 'vicissitude',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [['change'], ['alteration'], ['alternation'], ['transformation'], ['metamorphosis']],
        longAnswers: [
            'a change of circumstances or fortune, typically one that is unwelcome or unpleasant.',
            'alternation between opposite or contrasting things.',
        ],
    },
    {
        word: 'vie',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['compete'], ['contend'], ['contest'], ['struggle'], ['fight'], ['battle']],
        longAnswers: ['compete eagerly with someone in order to do or achieve something.'],
    },
    {
        word: 'vociferous',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['vehement'],
            ['outspoken'],
            ['vocal'],
            ['frank'],
            ['candid'],
            ['abrasive'],
            ['loud'],
            ['forceful'],
        ],
        longAnswers: ['expressing or characterized by vehement opinions; loud and forceful.'],
    },
];

export default words;
