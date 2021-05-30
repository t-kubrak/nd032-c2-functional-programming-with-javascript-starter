// 1. Create a function that when passed as a callback to the Higher Order function provided, makes the final return the number's square plus two

const addTwo = (callback, x) => {
  return callback(x) + 2
}

const squared = x => x ** 2;

// 2. Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) => {
  return `${title} ${first_name} ${last_name}`
}

const greeting = (callback, first_name, last_name, title) => {
  return `Greetings ${callback(first_name, last_name, title)}!`;
}

// you might notice that this function is less than ideal - that's great! We'll talk about why next
const number = addTwo(squared, 4);
console.log(number);

const hello = greeting(createFullName, 'John', 'Johnson', 'Dr');
console.log(hello);