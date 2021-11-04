import { Move } from "./move.model";

export interface User {
  _id: string,
  name: string,
  email: string,
  password: string
  phone: string,
  coins: number,
  moves: Move[]
}
