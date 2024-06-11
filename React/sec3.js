// Desctruring an object.

const person = {
    name: 'Morris',
    age: 20,
    isMarried: false,
};

// NORMALLY -- too much space needed
const name = person.name;
const age = person.age;
const isMarried = person.isMarried;

// Destructure the object this way then
const {name1, age1, isMarried1} = person;

// If person 1 and 2 have same properties but different names
const person2 = {...person, name: "Jack"};

// Same with arrays
const names = ["Morris", "Stella", "Dennis"];
const otherNames = [...names, "Victor"];