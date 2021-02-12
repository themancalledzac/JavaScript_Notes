// Spread Operator...
// Allows and iterable to spread/expand individually inside receiver
// split into single items and COPY them

const udemy = 'udemy';
// what if I want all the ltters of my const in a string?
const letters = [...udemy];
console.log(letters);


// what if I want all the ltters of my const in an array?
const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [boys, girls, bestFriend];
const oneArrayFriends = [...boys,bestFriend, ...girls, ];
// a log of an array of arrays
console.log(friends);
// a log of an array of the items all in one array
console.log(oneArrayFriends);

// const newFriends = oneArrayFriends;
const newFriends = [...oneArrayFriends];
newFriends[0] = 'nancy';
// notice it changes the [0] for both arrays, not just our new array (we fix this by changing line 24 for line 25)
console.log(oneArrayFriends);
console.log(newFriends);


const person = { name: 'john', job: 'developer' };
const newPerson = {...person, city:'chicago', name:'zac'};


console.log(person);
console.log(newPerson);
