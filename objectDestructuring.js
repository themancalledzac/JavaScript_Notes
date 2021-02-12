// faster/easier way to access/unpack variables from objects

const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
        sister: 'jane',
    },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

const last = 'some value';
// doesn't have to be in order like array
const { last: nothing, first, city, zip, siblings:{sister:favoriteSibling} } = bob
console.log(first, last, city, zip, favoriteSibling);




function printPersons(person) {
    const {first, last} = person
    console.log(first, last);
}

printPersons(bob);


// OR
function printPerson({first, last, siblings:{sister}}) {

    console.log(first, last, sister);
}

printPerson(bob);