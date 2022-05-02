import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'ratified',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [
            ['sign'],
            ['consent'],
            ['validate'],
            ['confirm'],
            ['approve'],
            ['sanction'],
            ['endorse'],
            ['accept'],
        ],
        longAnswers: ['sign or give formal consent to (a treaty, contract, or agreement), making it officially valid.'],
    },
    {
        word: 'recalcitrant',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['uncooperative'], ['disobedient'], ['intractable'], ['unmanageable'], ['difficult']],
        longAnswers: ['having an obstinately uncooperative attitude towards authority or discipline.'],
    },
    {
        word: 'rendition',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['performance'],
            ['rendering'],
            ['interpretation'],
            ['presentation'],
            ['depiction'],
            ['portrayal'],
            ['impression'],
        ],
        longAnswers: [
            'a performance or interpretation, especially of a dramatic role or piece of music.',
            '(especially in the US) the practice of sending a foreign criminal or terrorist suspect covertly to be interrogated in a country with less rigorous regulations for the humane treatment of prisoners.',
        ],
    },
    {
        word: 'renege',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['revoke'], ['renounce'], ['abandon'], ['break'], ['back', 'out'], ['pull', 'out']],
        longAnswers: ['go back on a promise, undertaking, or contract.', 'renounce or abandon.'],
    },
    {
        word: 'reprieve',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['pardon'],
            ['spare'],
            ['acquit'],
            ['amnesty'],
            ['stay', 'of', 'execution'],
            ['cancel', 'punishment'],
            ['postpone', 'punishment'],
            ['death', 'penalty'],
        ],
        longAnswers: [
            'cancel or postpone the punishment of (someone, especially someone condemned to death).',
            'a cancellation or postponement of a punishment.',
        ],
    },
    {
        word: 'reverie',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['daydream'], ['day', 'dream'], ['trance'], ['fantasy'], ['dream'], ['vision']],
        longAnswers: [
            "a state of being pleasantly lost in one's thoughts; a daydream.",
            'an instrumental piece suggesting a dreamy or musing state.',
            'a fanciful or impractical idea or theory.',
        ],
    },
    {
        word: 'rostrum',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['beak'],
            ['beak-like'],
            ['beak', 'like'],
            ['snout'],
            ['platform'],
            ['podium'],
            ['stage'],
            ['soapboax'],
            ['tribune'],
        ],
        longAnswers: [
            'a raised platform on which a person stands to make a public speech, receive an award or medal, play music, or conduct an orchestra.',
            'a beaklike projection, especially a stiff snout or anterior prolongation of the head in an insect, crustacean, or cetacean.',
        ],
    },
    {
        word: 'ruminated',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [
            ['chew', 'cud'],
            ['think', 'deeply'],
            ['think', 'about'],
            ['contemplate'],
            ['consider'],
            ['ponder'],
        ],
        longAnswers: ['think deeply about something.', '(of a ruminant) chew the cud.'],
    },
];

export default words;
