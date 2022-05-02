import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'ignoble',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['humble', 'origin'],
            ['humble', 'status'],
            ['dishonourable'],
            ['not', 'honourable'],
            ['unworthy'],
            ['shameful'],
            ['despicable'],
        ],
        longAnswers: ['not honourable in character or purpose.', 'of humble origin or social status.'],
    },
    {
        word: 'indefatigable',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['persistent'], ['endless'], ['tireless'], ['untiring'], ['determined']],
        longAnswers: ['(of a person or their efforts) persisting tirelessly.'],
    },
    {
        word: 'inexorable',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['impossible', 'stop'],
            ['impossible', 'prevent'],
            ['impossible', 'persuade'],
            ['unmoving'],
            ['unstoppable'],
            ['relentless'],
            ['unavoidable'],
            ['inescapable'],
            ['inevitable'],
        ],
        longAnswers: ['impossible to stop or prevent.', '(of a person) impossible to persuade; unrelenting.'],
    },
    {
        word: 'introspect',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [
            ['examine', 'thought'],
            ['examine', 'feelings'],
            ['examine', 'self'],
            ['look', 'into', 'self'],
        ],
        longAnswers: ["examine one's own thoughts or feelings."],
    },
    {
        word: 'irascible',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['irritable'],
            ['easily', 'angered'],
            ['quick', 'tempered'],
            ['quick-tempered'],
            ['short', 'tempered'],
            ['short-tempered'],
            ['bad', 'tempered'],
            ['bad-tempered'],
        ],
        longAnswers: ['having or showing a tendency to be easily angered.'],
    },
];

export default words;
