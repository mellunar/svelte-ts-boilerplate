export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  address: Address;
  company: Company;
}

export interface Address {
  city: string;
  street: string;
  suite: string;
  zipCode: string;
  geo: {
    lat: string;
    long: string;
  };
}

export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}
