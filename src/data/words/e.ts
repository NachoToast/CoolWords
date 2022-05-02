import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'ecclesiastical',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [['christianity', 'related']],
        longAnswers: ['relating to the Christian Church or its clergy.'],
    },
    {
        word: 'elucidated',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['explain'], ['clarify']],
        longAnswers: ['make (something) clear; explain.'],
    },
    {
        word: 'emanated',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [
            ['give', 'out'],
            ['originate', 'from'],
            ['produced', 'by'],
            ['emerge'],
            ['flow'],
            ['disperse'],
            ['spread', 'out'],
        ],
        longAnswers: ['(of a feeling, quality, or sensation) issue or spread out from (a source).'],
    },
    {
        word: 'endogenous',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['internal', 'cause'],
            ['internal', 'origin'],
            ['self', 'cause'],
        ],
        longAnswers: [
            'having an internal cause or origin.',
            'growing or originating from within an organism.',
            '(of a disease or symptom) not attributable to any external or environmental factor.',
        ],
    },
    {
        word: 'epilating',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['remove', 'hair', 'pulling'],
            ['remove', 'hair', 'pull'],
            ['remove', 'hair', 'root'],
        ],
        longAnswers: ['remove hair from (the body) by pulling it from the root.'],
    },
    {
        word: 'epistemological',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [
            ['theory', 'knowledge'],
            ['theory', 'belief', 'opinion'],
        ],
        longAnswers: [
            'relating to the theory of knowledge, especially with regard to its methods, validity, and scope, and the distinction between justified belief and opinion.',
        ],
    },
    {
        word: 'espoused',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['marry'], ['adopt'], ['support'], ['married']],
        longAnswers: ['adopt or support (a cause, belief, or way of life).', 'marry'],
    },
    {
        word: 'evince',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['indicate'], ['show']],
        longAnswers: ['reveal the presence of (a quality or feeling); indicate.'],
    },
    {
        word: 'expatriate',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['send', 'overseas'],
            ['send', 'abroad'],
            ['live', 'outside'],
            ['live', 'other', 'country'],
        ],
        longAnswers: [
            'a person who lives outside their native country.',
            'denoting or relating to a person living outside their native country.',
            'send (a person or money) abroad.',
        ],
    },
    {
        word: 'exsanguinate',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['drain', 'blood'],
            ['empty', 'blood'],
            ['remove', 'blood'],
        ],
        longAnswers: ['drain (a person, animal, or organ) of blood.'],
    },
];

export default words;
