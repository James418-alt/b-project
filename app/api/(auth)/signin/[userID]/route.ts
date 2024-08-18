import { dbConfig } from "@/app/utils/dbConfig";
import myUserModel from "@/app/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = await params;
    const getD = await myUserModel.findById(userID);
    return NextResponse.json({
      message: "User Found",
      data: getD,
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      error: error.message,
      status: 400,
    });
  }
};
