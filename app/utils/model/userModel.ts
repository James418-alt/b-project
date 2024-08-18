import { model, models, Schema } from "mongoose";
import { iUserData } from "../interface";

const userModel = new Schema<iUserData>(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    balance: { type: String, default: "0.00" },
  },
  { timestamps: true }
);

const myUserModel = models.users || model<iUserData>("users", userModel);
export default myUserModel;
