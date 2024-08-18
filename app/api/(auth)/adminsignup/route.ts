import { dbConfig } from "@/app/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import myUserModel from "@/app/utils/model/userModel";
import myAdminModel from "@/app/utils/model/adminModel";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { name, email, password } = await req.json();
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const getD = await myAdminModel.create({ name, email, password: hashed });

    return NextResponse.json({
      message: "User Created",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await dbConfig();
    const getD = await myAdminModel.find().populate([{ path: "clients" }]);
    return NextResponse.json({
      message: "Admin",
      data: getD,
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error OCcured",
      error: error.message,
      status: 400,
    });
  }
};
