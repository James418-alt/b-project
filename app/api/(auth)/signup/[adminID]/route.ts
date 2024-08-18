import { dbConfig } from "@/app/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import myUserModel from "@/app/utils/model/userModel";
import myAdminModel from "@/app/utils/model/adminModel";

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { adminID } = await params;
    const { name, email, password } = await req.json();
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const admin = await myAdminModel.findById(adminID);
    const getD = await myUserModel.create({ name, email, password: hashed });
    await admin.clients.push(getD);
    admin.save();
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

export const GET = async () => {
  try {
    await dbConfig();
    const getD = await myUserModel.find();
    return NextResponse.json({
      message: "Users Found",
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
