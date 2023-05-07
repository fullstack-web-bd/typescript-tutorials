interface IHobby {
  name: string;
  description: string;
}

interface IAddress {
  street: string;
  city?: string;
  postCode: number;
  state: string;
}

interface IUser {
  name: string;
  age: number;
  address: IAddress;
  readonly email: string;
  hobbies: Array<IHobby>;
  bio?: string | null | undefined;
}

function printUser(user: IUser) {
  console.log(user);
}

const user: IUser = {
  name: 'Akash',
  age: 27,
  address: {
    street: 'Dhaka',
    city: 'Dhaka',
    postCode: 1212,
    state: 'Bangladesh'
  },
  email: 'xxx@gmail.com',
  hobbies: [
    {
      name: 'Gardening',
      description: 'Gardening is my hobby..'
    }
  ],
  bio: null
}

printUser(user);

user.hobbies.map(hobby => {
  hobby.name
});

interface IUserUpdate extends IUser {
  id: number;
  status: string;
}

function printUserUpdate(user: IUserUpdate) {
  console.log(user.id);
}
