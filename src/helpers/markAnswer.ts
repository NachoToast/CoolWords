import Word from '../types/Word';

function markAnswer(rawUserAnswer: string, word: Word): boolean {
    const userAnswer = new Set<string>(
        rawUserAnswer
            .toLowerCase()
            .split(/\s/g)
            .map((word) => word.replace(/\W/g, '')),
    );

    // simple answer checking
    for (const wordList of word.simpleAnswers) {
        if (wordList.every((word) => userAnswer.has(word))) {
            return true;
        }
    }

    // long answer checking
    for (const sentence of word.longAnswers) {
        const words = sentence
            .toLowerCase()
            .split(/\s/g)
            .map((word) => word.replace(/\W/g, ''))
            .filter((word) => word.length > 3);

        const commonWordCount = words.filter((word) => userAnswer.has(word)).length;

        const commonWordProportion = commonWordCount / words.length;

        if (commonWordProportion > 0.3) return true;
        console.log(`[${word.word}] long answer skipped, word overlap: ${commonWordProportion.toFixed(2)}`);
    }

    return false;
}

export default markAnswer;
