// Interface para la estructura "Geo"
interface Geo {
  lat: string;
  lng: string;
}

// Interface para la estructura "Address"
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

// Interface para la estructura "Company"
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// Interface para el objeto principal "User"
export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
  photoUrl: string;
  friendsCount: number;
}
