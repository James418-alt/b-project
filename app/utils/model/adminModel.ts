import { model } from "mongoose";
import { models, Schema, Types } from "mongoose";
import { iAdminData } from "../interface";

const adminModel = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    clients: [{ type: Types.ObjectId, ref: "users" }],
  },
  { timestamps: true }
);

const myAdminModel = models.admins || model<iAdminData>("admins", adminModel);
export default myAdminModel;
