import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'harangue',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [['lecture'], ['tirade'], ['diatribe'], ['rant'], ['aggressive', 'speech']],
        longAnswers: [
            'a lengthy and aggressive speech.',
            'lecture (someone) at length in an aggressive and critical manner.',
        ],
    },
    {
        word: 'hedonism',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['pleasure'], ['indulgence'], ['self-indulgence']],
        longAnswers: ['the pursuit of pleasure; sensual self-indulgence.'],
    },
    {
        word: 'hegemony',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['leadership'], ['dominance'], ['leader'], ['dominion'], ['supremacy'], ['supreme']],
        longAnswers: ['leadership or dominance, especially by one state or social group over others.'],
    },
];

export default words;
