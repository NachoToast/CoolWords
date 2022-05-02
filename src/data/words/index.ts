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
import words_n from './n';
import words_o from './o';
import words_p from './p';
import words_q from './q';
import words_r from './r';
import words_s from './s';
import words_t from './s';
import words_u from './u';
import words_v from './v';

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
    n: words_n,
    o: words_o,
    p: words_p,
    q: words_q,
    r: words_r,
    s: words_s,
    t: words_t,
    u: words_u,
    v: words_v,
    w: [],
    x: [],
    y: [],
    z: [],
};

const allWords: Word[] = Object.values(wordLetterMap).reduce((prev, next) => [...prev, ...next]);

export default allWords;
