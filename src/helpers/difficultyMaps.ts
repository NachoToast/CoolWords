import DifficultyRating from '../types/Difficulty';
import ColourGradient, { std_green, std_red, std_yellow } from './colorGradient';

export const difficultyNameMap: Record<DifficultyRating, string> = {
    [DifficultyRating.VeryEasy]: 'Very Easy',
    [DifficultyRating.Easy]: 'Easy',
    [DifficultyRating.Medium]: 'Medium',
    [DifficultyRating.Hard]: 'Hard',
    [DifficultyRating.VeryHard]: 'Very Hard',
};

export function difficultyColourMap(d: DifficultyRating): string {
    const { red, green, blue } = ColourGradient(0, DifficultyRating.VeryHard, d, std_green, std_yellow, std_red);

    return `rgb(${red}, ${green}, ${blue})`;
}
