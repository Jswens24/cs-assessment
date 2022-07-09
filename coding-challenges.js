const perf = require('execution-time')();

const sumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            }
        }
    } return false
};

console.log(sumZero([]));
console.log(sumZero([1]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([1, 2, 3, -2]));


perf.start();                     // Starts timer
sumZero([1, 2, 3, -2]);
let resultsSumZero = perf.stop();  // Stops timer and save time results

//this function takes 168.174 microseconds to run
// Space complexity = O(1)

// ----------------------------------------------------------------------------------

const hasUniqueChars = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    } return true
}

console.log('hasUniqueChars challenge');
console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));

perf.start();                     // Starts timer
hasUniqueChars(['Monday']);
let resultsUniqueChars = perf.stop();  // Stops timer and save time results

//this function takes 9.649 microseconds to run
// Space complexity = O(n)

// ----------------------------------------------------------------------------------

const isPangram = (str) => {
    const alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const lowerCaseStr = str.toLowerCase();
    for (let i = 0; i < alphabetArr.length; i++) {
        if (lowerCaseStr.indexOf(alphabetArr[i]) < 0) {
            return false;
        }
    }
    return true;
}

console.log('Panagram Challenge');
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));


perf.start();                     // Starts timer
isPangram('The quick brown fox jumps over the lazy dog!');
let resultsIsPangram = perf.stop();  // Stops timer and save time results

//this function takes 5.355 microseconds to run
// Space complexity = O(1)

// ----------------------------------------------------------------------------------

const findLongestWord = (arr) => {
    let longestWord = 0
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i].length >= arr[j].length) {
                longestWord = arr[i].length;
            } else {
                longestWord = arr[j].length;
            }
        }
    }
    return longestWord;
};


console.log('findLongestWord Challenge');
console.log(findLongestWord(["hi", "hello"]));


perf.start();                     // Starts timer
findLongestWord(["hi", "hello"]);
let resultsLongestWord = perf.stop();  // Stops timer and save time results

//this function takes 8.198 microseconds to run
// Space complexity = O(n)
// ----------------------------------------------------------------------------------

console.log('Results for the coding challenges runtimes!');
console.log("sumZero", resultsSumZero.preciseWords);
console.log("hasUniqueChars", resultsUniqueChars.preciseWords);
console.log("isPangram", resultsIsPangram.preciseWords);
console.log("longestWord", resultsLongestWord.preciseWords);