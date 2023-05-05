// Boolean
let isCompleted: boolean = true;
let hasErrors: boolean = false;

isCompleted = false; // ✅
hasErrors = true; // ✅

// number
let age: number = 10;
let price: number = 1000.12;
// price = 'akash'

// String
let firstName: string = 'Jhon';
let message: string = `Hello ${firstName}!`;

// Later catch compile time errors
// firstName = 20; // ❌
// firstName = 10.1; // ❌
// firstName = true; // ❌
// firstName = null; // ❌
firstName = "Jhon Doe"; // ✅
firstName = 'Jhon Doe'; // ✅
firstName = `Jhon Doe`; // ✅
firstName = `${firstName}`; // ✅

// Array
let numbers: number[] = [1, 2, 3, 4];
numbers = [10, 200];
let names: string[] = ["John", "Jane", "Bob"];
names = ['Akash'];

// Tuple
let person: [string, number] = ["John", 30];
let coordinate: [number, number, number] = [10, 20, 30];

// enum
enum Color {
  Red,
  Green,
  Blue,
}

let favoriteColor: Color = Color.Blue;
console.log(favoriteColor);

// void
function logMessage(message: string): void {
  console.log(message);
}

// null
let nullValue: null = null;

// Later catch compile time errors
// nullValue = 'false'; // ❌
// nullValue = [1, "Jhon"]; // ❌
nullValue = null; // ✅

// undefined
let undefinedValue: undefined = undefined;

// Later catch compile time errors
// undefinedValue = 'false'; // ❌
// undefinedValue = [1, "Jhon"]; // ❌
undefinedValue = undefined; // ✅


// any
let value: any = "hello";
value = 123;
value = ["a", "b", "c"];