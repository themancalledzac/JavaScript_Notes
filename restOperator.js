// Rest Operator...
// gathers/collects item
// destructuring, functions
// placement important, careful with the same name

// IMPORTANT---------------------------------------------------- //
//                                                               //
//     rest declares a function, spread invokes the function     //
//                                                               //
// ------------------------------------------------------------- //

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana'];
const [first, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);

const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon')
console.log(specificFruit);

// ------------------------------------------------------------- //
// objects
const person = {name: 'john', lastName: 'smith', job: 'developer'};
const { name, ...rest } = person;
console.log(name, rest);


// function

//use rest when we DECLARE a function
// use spread when we INVOKE a function

const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total, item) => {return total += item}, 0)/scores.length;
    console.log(average);
}
const testScores = [23, 45, 67, 89];
getAverage(person.name,...testScores)