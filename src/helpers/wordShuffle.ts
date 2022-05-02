/** Shuffles an array in-place. */
function wordShuffle<T>(arr: Array<T>): Array<T> {
    let currentIndex = arr.length;

    while (currentIndex > 0) {
        // get random element from 0 to current index (exclusive)
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }

    return arr;
}

export default wordShuffle;
