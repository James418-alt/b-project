import { dbConfig } from "@/app/utils/dbConfig";
import myUserModel from "@/app/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = await params;
    const { balance } = await req.json();
    const getD = await myUserModel.findByIdAndUpdate(
      userID,
      { balance },
      { new: true }
    );
    return NextResponse.json({
      message: "Balance Updated",
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
