function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello");
console.log(output); // hello

let output2 = identity<number>(100);
console.log(output); // 100

interface IUserObj {
  name: string;
}
let output3 = identity<IUserObj>({
  name: 'dff'
});
console.log(output); // {name: 'dff'}

// Module

export function getUserAge(dateOfBirth: string): number {
  return 10;
}

export function getUserBio(): string {
  return 'BIO';
}