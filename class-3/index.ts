// Define
let message: string;

// Assign
message = "Hello TypeScript!";

// Output
console.log(message); // Hello TypeScript!

let age: number;

let dailyIncome = 1000;
// dailyIncome = '';

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(100, 1));

function greet(name: string = 'Polash') {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log(`Hello, stranger!`);
  }
}
console.log(greet());

function sum(...numbers: number[]) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3));