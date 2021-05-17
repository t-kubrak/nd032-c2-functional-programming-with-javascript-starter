// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------
function greeting() {
    const time = new Date().getHours()

    if(time > 12 && time < 17) {
        return "Good Afternoon"
    }

    return "Good Morning!"
}

const greetingResult = greeting();
console.log(greetingResult);


// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and  
//       returns an array of items counting down from that number to 
//       zero.
// -----------------------------------------------------------------
const countDownItemsFromNumber = (number) => {
    let numbers = [];

    for (let i = number; i >= 0; i--) {
        numbers.push(i);
    }

    return numbers;
}

const numbersArr = countDownItemsFromNumber(7);
console.log(numbersArr);
