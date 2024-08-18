import { clear } from "console";
import { connect } from "mongoose";

export const dbConfig = async () => {
  const url = process.env.DB_URL as string;
  try {
    await connect(url).then(() => {
      console.log("Server Up");
    });
  } catch (error) {
    console.log(error);
  }
};
