const person = {
  firstName: "Tim",
  age: 28,

  greet: function (greeting) {
    const capitalizedGreeting = greeting[0].toUpperCase() + greeting.slice(1);
    return `${capitalizedGreeting}, my name is ${this.firstName}`;
  },
};

// Your code here!

console.log(person.greet("hi")); // Hi, my name is Tim
console.log(person.greet("hey")); // Hey, my name is Tim
console.log(person.greet("hello")); // Hello, my name is Tim
