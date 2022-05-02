/**
 * Measures how hard it is to know a words definition.
 *
 * Should take into consideration:
 *
 * \- How often the word is used in everyday life,
 *  e.g. 'adornment' is used much more than 'procyonine'.
 *
 * \- How easy the word is to guess based off compound words/substrings,
 *   e.g. 'phylogenetic' hints to biological species and groups ('phylum').
 *   Note this may make a word harder to guess, e.g. 'milquetoast' has nothing to do with toast.
 */
enum DifficultyRating {
    VeryEasy,
    Easy,
    Medium,
    Hard,
    VeryHard,
}

export default DifficultyRating;
