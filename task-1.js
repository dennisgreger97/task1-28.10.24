// Target array
const people = [];

// Source data
const firstNames = ["Mark", "Sandra", "Dina", "Mikoel"];
const lastNames = ["Shark", "Mellow", "Saur", "Boomex"];
const ages = [18, 27, 31, 44];
const cities = ["New York", "Berlin", "Barcelona", "Windhoek"];

// Your code here!

for (let i = 0; i < firstNames.length; i++) {
  const person = {
    firstName: firstNames[i],
    lastName: lastNames[i],
    age: ages[i],
    city: cities[i],
    fullName: `${firstNames[i]} ${lastNames[i]}`,

    introduce: function () {
      return `Hello, my name is ${this.fullName}, I live in ${this.city} and i Am ${this.age} years old`;
    },
  };
  people.push(person);
}

console.log(people);
console.log(people[0].introduce());
