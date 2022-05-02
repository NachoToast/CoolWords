import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'languid',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['weak', 'sick'],
            ['weak', 'illness'],
            ['weak', 'fatigue'],
            ['lazy'],
            ['slothful'],
            ['unenergetic'],
            ['un-energetic'],
        ],
        longAnswers: [
            '(of a person, manner, or gesture) having or showing a disinclination for physical exertion or effort.',
            'weak or faint from illness or fatigue.',
        ],
    },
    {
        word: 'leporine',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [['hare'], ['hares'], ['rabbit'], ['rabbits']],
        longAnswers: ['of or resembling a hare or hares.'],
    },
    {
        word: 'libel',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['defamation'],
            ['defame'],
            ['slander'],
            ['bad', 'name'],
            ['ruin', 'reputation'],
            ['false', 'statement'],
        ],
        longAnswers: [
            "a published false statement that is damaging to a person's reputation; a written defamation.",
            '(in admiralty and ecclesiastical law) bring a suit against.',
        ],
    },
];

export default words;
