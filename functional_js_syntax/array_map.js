// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// your code
const reversed = start.map((val, index, array) => array[array.length - 1 - index]);

// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(reversed);

// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]

// your code
const jobsToNames = shipMates.map(jobAndName => {
    const [name, job] = jobAndName;
    return `${job}: ${name}`;
})

// expected output: Array ["Captain: Mal", etc...]
console.log(jobsToNames);

// ----------------------------------------------------------
// 3. Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"]

// your code
const evenOrOdd = awayTeam.map((name, index) => {
    return `${name}: ${index % 2 === 0 ? 'even' : 'odd'}`;
})

// expected output: Array: ["Picard: even", "Riker: odd", etc...]
console.log(evenOrOdd)

// ----------------------------------------------------------
// 4. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']

// your code
const sciFiShowsWithIndeces = sci_fi_shows.map((name, index) => [name, index])

// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]
console.log(sciFiShowsWithIndeces)

// ----------------------------------------------------------
// 5. For each item in this array, create a multidimensional array containing the entire original array.

const numbers = [1, 2, 3, 4]

// your code
const numbersMultiplied = numbers.map((number, index, numbers) => numbers)

// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]
console.log(numbersMultiplied)

// Having trouble with creating a 2D array? 
// Take a closer look at the last two arguments of map, one of them might be able to help
