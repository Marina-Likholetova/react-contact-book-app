import { Album } from "entities/album";

export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address?: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string | number,
    website: string,
    company?: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

export type UserForm = Omit<User, "id" | "company" | "address">;

export type UserInput = keyof UserForm;
  
export function isUser(item: User | Album): item is User {
    return (item as User).name !== undefined || ("name" in item)
}

export type Id = string | number