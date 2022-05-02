import allWords from '../data';

function wordShuffle() {
    let currentIndex = allWords.length;

    while (currentIndex > 0) {
        // get random element from 0 to current index (exclusive)
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [allWords[currentIndex], allWords[randomIndex]] = [allWords[randomIndex], allWords[currentIndex]];
    }
}

export default wordShuffle;
