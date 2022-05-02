import Word from '../../types/Word';

import words_a from './a';
import words_b from './b';
import words_c from './c';
import words_d from './d';
import words_e from './e';
import words_f from './f';
import words_g from './g';
import words_h from './h';
import words_i from './i';
import words_j from './j';
import words_k from './k';
import words_l from './l';
import words_m from './m';

export const wordLetterMap: Record<string, Word[]> = {
    a: words_a,
    b: words_b,
    c: words_c,
    d: words_d,
    e: words_e,
    f: words_f,
    g: words_g,
    h: words_h,
    i: words_i,
    j: words_j,
    k: words_k,
    l: words_l,
    m: words_m,
};

const allWords: Word[] = Object.values(wordLetterMap).reduce((prev, next) => [...prev, ...next]);

export default allWords;
