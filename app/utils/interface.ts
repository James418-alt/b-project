import { Document } from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
  balance: string;
  user: {};
}
export interface iUserData extends iUser, Document {}
interface iAdmin {
  name: string;
  email: string;
  password: string;
  clients: [];
}
export interface iAdminData extends iAdmin, Document {}
