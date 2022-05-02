import DifficultyRating from '../../types/Difficulty';
import Word from '../../types/Word';

const words: Word[] = [
    {
        word: 'abattoir',
        difficulty: DifficultyRating.VeryHard,
        simpleAnswers: [['slaughterhouse'], ['slaughter', 'house']],
        longAnswers: ['a slaughterhouse'],
    },
    {
        word: 'aberrance',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [['deviation'], ['deviance'], ['deviating'], ['abnormal'], ['atypical'], ['anomalous']],
        longAnswers: ['a state or condition markedly different from the norm.'],
    },
    {
        word: 'abound',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [
            ['abundant'],
            ['plentiful'],
            ['numerous'],
            ['large', 'amount'],
            ['large', 'number'],
            ['a', 'lot'],
        ],
        longAnswers: ['exist in large numbers or amounts.', 'have in large numbers or amounts.'],
    },
    {
        word: 'accoutrement',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['additional', 'item'],
            ['extra', 'item'],
        ],
        longAnswers: ['an additional item of dress or equipment.'],
    },
    {
        word: 'admonishing',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['warn'], ['reprimand'], ['advise'], ['urge']],
        longAnswers: ['warn or reprimand someone firmly.', 'advise or urge (someone) earnestly.'],
    },
    {
        word: 'adornment',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [
            ['decorates'],
            ['decoration'],
            ['cosmetic'],
            ['jewellery'],
            ['accessory'],
            ['accessories'],
            ['ornament'],
        ],
        longAnswers: ['a thing which adorns or decorates; an ornament.'],
    },
    {
        word: 'adroitly',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['clever'], ['skillful']],
        longAnswers: ['in a clever or skillful way.'],
    },
    {
        word: 'ambivalent',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [
            ['mixed', 'feelings'],
            ['contradicting', 'ideas'],
            ['contradictory', 'ideas'],
        ],
        longAnswers: ['having mixed feelings or contradictory ideas about something or someone.'],
    },
    {
        word: 'amiable',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['friendly'],
            ['pleasant'],
            ['nice'],
            ['kind'],
            ['good', 'natured'],
            ['good-natured'],
            ['likable'],
        ],
        longAnswers: ['having or displaying a friendly and pleasant manner.'],
    },
    {
        word: 'amicable',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [
            ['friendly'],
            ['friendliness'],
            ['likable'],
            ['nice'],
            ['good', 'natured'],
            ['good-natured'],
            ['polite'],
        ],
        longAnswers: ['characterized by friendliness and absence of discord.'],
    },
    {
        word: 'ancillary',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [
            ['supporting', 'primary'],
            ['helping', 'primary'],
            ['support', 'primary'],
            ['helping', 'main'],
            ['support', 'main'],
        ],
        longAnswers: [
            'providing necessary support to the primary activities or operation of an organization, system, etc.',
            'a person whose work provides necessary support to the primary activities of an organization, system, etc.',
        ],
    },
    {
        word: 'antechamber',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [],
        longAnswers: ['a small room leading to a main one.'],
    },
    {
        word: 'apical',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['apex'], ['top'], ['peak'], ['tip']],
        longAnswers: [
            'relating to or denoting an apex.',
            '(of a consonant) formed with the tip of the tongue at or near the front teeth or the alveolar ridge, for example th or trilled r.',
        ],
    },
    {
        word: 'arbiter',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['settler'], ['judge'], ['umpire'], ['referee'], ['settler'], ['authority']],
        longAnswers: [
            'a person who settles a dispute or has ultimate authority in a matter.',
            'a person whose views or actions have influence in a particular sphere.',
        ],
    },
    {
        word: 'arcology',
        difficulty: DifficultyRating.Easy,
        simpleAnswers: [['integrated', 'city'], ['conservation city'], ['ideal', 'massive', 'city']],
        longAnswers: [
            'an ideal integrated city contained within a massive vertical structure, allowing maximum conservation of the surrounding environment.',
        ],
    },
    {
        word: 'arris',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['sharp', 'edge', 'two', 'surfaces']],
        longAnswers: ['a sharp edge formed by the meeting of two flat or curved surfaces.'],
    },
    {
        word: 'assent',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['expression', 'approval'],
            ['expression', 'agreement'],
            ['show', 'approval'],
            ['show', 'agreement'],
        ],
        longAnswers: ['the expression of approval or agreement.', 'express approval or agreement.'],
    },
    {
        word: 'assuage',
        difficulty: DifficultyRating.Hard,
        simpleAnswers: [['satisfy'], ['suppress'], ['less', 'intense']],
        longAnswers: ['make (an unpleasant feeling) less intense.', 'satisfy (an appetite or desire).'],
    },
    {
        word: 'aubergine',
        difficulty: DifficultyRating.VeryEasy,
        simpleAnswers: [['egg', 'plant'], ['eggplant']],
        longAnswers: [
            'the purple egg-shaped fruit of a tropical Old World plant, which is eaten as a vegetable.',
            'the large plant of the nightshade family which bears aubergines.',
        ],
    },
    {
        word: 'avarice',
        difficulty: DifficultyRating.Medium,
        simpleAnswers: [
            ['greed', 'wealth'],
            ['greed', 'material'],
            ['greedy', 'wealth'],
            ['greedy', 'material'],
        ],
        longAnswers: ['extreme greed for wealth or material gain.'],
    },
];

export default words;
