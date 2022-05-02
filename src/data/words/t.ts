import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'tenable',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['defensible'],
            ['justifiable'],
            ['defendable'],
            ['supportable'],
            ['sustainable'],
            ['maintainable'],
            ['holdable'],
            ['usable'],
        ],
        longAnswers: [
            'able to be maintained or defended against attack or objection.',
            '(of an office, position, scholarship, etc.) able to be held or used.',
        ],
    },
    {
        word: 'terse',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['curt'], ['abrupt'], ['clipped'], ['brunt'], ['grunt'], ['short'], ['brief']],
        longAnswers: ['sparing in the use of words; abrupt.'],
    },
    {
        word: 'therianthrope',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['part', 'human', 'animal'], ['partial', 'human'], ['partial', 'animal'], ['non-human']],
        longAnswers: [
            '(mythology) Any mythical being which is part human, part animal.',
            '(sometimes furry fandom slang) Someone with an intense spiritual or psychological identification as a non-human animal.',
            "I'm not a furry guys I swear I just throught it was a cool word",
        ],
    },
    {
        word: 'trepidation',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['fear'],
            ['apprehension'],
            ['dread'],
            ['agitation'],
            ['worry'],
            ['nervousness'],
            ['anxiety'],
            ['panic'],
            ['trembling'],
        ],
        longAnswers: [
            'a feeling of fear or anxiety about something that may happen.',
            'trembling movements or motion.',
        ],
    },
    {
        word: 'triage',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['prioritize'], ['decide', 'order'], ['assign', 'order']],
        longAnswers: [
            '(in medical use) the assignment of degrees of urgency to wounds or illnesses to decide the order of treatment of a large number of patients or casualties.',
            'decide the order of treatment of (patients or casualties).',
        ],
    },
    {
        word: 'turophile',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['caseophile'], ['cheese']],
        longAnswers: ['A connoisseur or lover of cheese; a caseophile'],
    },
];

export default words;
