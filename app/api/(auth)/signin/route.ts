import { dbConfig } from "@/app/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import myUserModel from "@/app/utils/model/userModel";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { email, password } = await req.json();
    const user = await myUserModel.findOne({ email });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        return NextResponse.json({
          message: "Login Successfully",
          data: user,
          status: 200,
        });
      } else {
        return NextResponse.json({
          message: "Error Reading Pass",

          status: 400,
        });
      }
    } else {
      return NextResponse.json({
        message: "User doesn't exist",

        status: 400,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
