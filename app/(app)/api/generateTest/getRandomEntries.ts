export default function getRandomEntries<T>(array: T[], numEntries: number): T[] {
    // Clone the array to avoid modifying the original array
    let tempArray = array.slice();
    let currentIndex = tempArray.length;
    let temporaryValue: T, randomIndex: number;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = tempArray[currentIndex];
        tempArray[currentIndex] = tempArray[randomIndex];
        tempArray[randomIndex] = temporaryValue;
    }

    // Return the first numEntries elements
    return tempArray.slice(0, numEntries);
}
