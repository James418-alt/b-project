import { dbConfig } from "@/app/utils/dbConfig";
import myAdminModel from "@/app/utils/model/adminModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { adminID } = await params;
    const getD = await myAdminModel.findById(adminID);

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
