import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'decimate (historical)',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['kill', 'one', 'ten']],
        longAnswers: [
            'kill one in every ten of (a group of people, originally a mutinous Roman legion) as a punishment for the whole group.',
        ],
    },
    {
        word: 'defenestrated',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [
            ['throw', 'window'],
            ['remove', 'position'],
            ['dismiss', 'position'],
        ],
        longAnswers: [
            'throw (someone) out of a window.',
            'remove or dismiss (someone) from a position of power or authority.',
        ],
    },
    {
        word: 'deference',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['polite', 'submission'], ['respect']],
        longAnswers: ['polite submission and respect.'],
    },
    {
        word: 'deign',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['condescent'], ['stoop'], ['drop', 'level']],
        longAnswers: [
            "do something that one considers to be beneath one's dignity.",
            'condescend to give (something).',
        ],
    },
    {
        word: 'delectable',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['delicious'], ['attractive'], ['tasty'], ['yummy'], ['yum'], ['gordon', 'ramsay', 'food']],
        longAnswers: ['(of food or drink) delicious.', 'extremely attractive'],
    },
    {
        word: 'demarcate',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['set', 'limits'], ['set', 'boundaries'], ['set', 'boundary'], ['separate'], ['distinguish']],
        longAnswers: ['set the boundaries or limits of.', 'separate or distinguish from.'],
    },
    {
        word: 'demesne',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [
            ['land', 'manor'],
            ['land', 'property'],
        ],
        longAnswers: [
            'a piece of land attached to a manor and retained by the owner for their own use.',
            "possession of real property in one's own right.",
        ],
    },
    {
        word: 'derision',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['ridicule'], ['mockery'], ['jeering'], ['jeer'], ['mock']],
        longAnswers: ['contemptuous ridicule or mockery.'],
    },
    {
        word: 'diatribe',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['tirade'], ['attack', 'verbal']],
        longAnswers: ['a forceful and bitter verbal attack against someone or something.'],
    },
    {
        word: 'dirigible',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['steerable'], ['guidable'], ['directable'], ['directed'], ['steered']],
        longAnswers: ['capable of being steered, guided, or directed.'],
    },
    {
        word: 'dissimulation',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['concealment'], ['concealing'], ['dishonesty'], ['flock', 'birds'], ['pretence']],
        longAnswers: ["concealment of one's thoughts, feelings, or character; pretence.", 'a flock of small birds'],
    },
    {
        word: 'dogmatic',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['opinionated'], ['assertive'], ['insistent'], ['emphatic']],
        longAnswers: ['inclined to lay down principles as undeniably true.'],
    },
];

export default words;
