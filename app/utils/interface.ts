import { Document } from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
  balance: string;
}
export interface iUserData extends iUser, Document {}
