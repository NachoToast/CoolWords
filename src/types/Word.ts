import DifficultyRating from './Difficulty';

interface Word {
    word: string;
    difficulty: DifficultyRating;

    /** If the player gets all of the words from any of these lists, they are correct. */
    simpleAnswers: string[][];

    /** Used to compare word similarities. */
    longAnswers: string[];
}

export default Word;
