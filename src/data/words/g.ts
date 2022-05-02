import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'genteel',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['polite'], ['refined'], ['respecting'], ['respect']],
        longAnswers: ['characterized by exaggerated or affected politeness, refinement, or respectability.'],
    },
    {
        word: 'glower',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['angry', 'look'], ['scowl'], ['frown'], ['sullen']],
        longAnswers: ["have an angry or sullen look on one's face; scowl.", 'an angry or sullen look.'],
    },
    {
        word: 'gustatory',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['taste']],
        longAnswers: ['concerned with tasting or the sense of taste.'],
    },
];

export default words;
