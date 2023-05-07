type Status = 'pending' | 'active' | 'banned';

type Person = {
  name: string;
  age: number;
  readonly email: string;
  bio?: string;
  status?: Status;
};

type PersonUpdateFormData = {
  id: number;
}

type PersonUpdate = Person & PersonUpdateFormData;

type Id = string | number;

interface IHobby2 {
  name: string;
  description: string;
}

interface IHobbyAdvance {
  more: string;
}

type Hobby = IHobby2 & IHobbyAdvance;

function printPerson(person: PersonUpdate) {
  console.log(person);
}

printPerson({
  name: '',
  age: 0,
  email: '',
  id: 1,
});



function printValue(value: string | number) {
  if (typeof value === "string") {
    parseInt(value);
    console.log(`String value: ${value}`);
  } else if (typeof value === "number") {
    console.log(`Number value: ${value}`);
  }
}

printValue("Hello"); // ✅
printValue(42); // ✅
// printValue(true); // ❌