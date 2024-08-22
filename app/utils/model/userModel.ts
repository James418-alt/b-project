import { model, models, Schema, Types } from "mongoose";
import { iUserData } from "../interface";

const userModel = new Schema<iUserData>(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    balance: { type: String, default: "0.00" },
    user: { type: Types.ObjectId, ref: "admins" },
  },
  { timestamps: true }
);

const myUserModel = models.user || model<iUserData>("user", userModel);
export default myUserModel;
