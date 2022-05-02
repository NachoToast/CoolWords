import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'unadulterated',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['whole'],
            ['unmixed'],
            ['unsullied'],
            ['pure'],
            ['untainted'],
            ['unpolluted'],
            ['clean'],
            ['uncontaminated'],
        ],
        longAnswers: [
            '(especially of food or drink) having no inferior added substances; pure.',
            'not mixed or diluted with any different or extra elements; complete and absolute.',
        ],
    },
    {
        word: 'usurp',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [
            ['take', 'illegally'],
            ['take', 'forcefully'],
            ['supplant'],
            ['enroach'],
            ['infringe'],
            ['sieze'],
            ['take', 'over'],
            ['expropriate'],
            ['overthrow'],
            ['topply'],
            ['dethrone'],
            ['take', 'throne'],
        ],
        longAnswers: [
            'take (a position of power or importance) illegally or by force.',
            'take the place of (someone in a position of power) illegally; supplant.',
            "encroach or infringe upon (someone's rights).",
        ],
    },
];

export default words;
