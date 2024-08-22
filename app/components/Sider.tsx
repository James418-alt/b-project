"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdDashboard, MdHome, MdMenu, MdMoney } from "react-icons/md";
import Link from "next/link";
import { TbMoodDollar } from "react-icons/tb";
import { DollarSign } from "lucide-react";
import { BiTransfer } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import Info from "./Info";
import Confirm from "./Confirm";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";

const Sider = () => {
  const session: any = useSession();
  const user = useSelector((state: any) => state.user);

  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <MdMenu className="text-white text-[30px]" />
      </SheetTrigger>
      <SheetContent className="w-[200px]">
        <SheetHeader>
          <SheetDescription className="mb-[20px]">
            <h1 className="font-semibold text-[15px] mb-3">
              {user?.data?.name}
            </h1>
            <div className="flex justify-start items-start mt-3">
              <Confirm text={"Log Out"} />
            </div>

            <div className="mt-[30px] flex flex-col gap-10">
              <Link href={"/dashboard"} className="flex gap-1 items-center">
                <MdDashboard className="text-blue-500 text-[20px]" />{" "}
                <h1 className="text-[16px]">Dashboard</h1>
              </Link>

              <div className="flex gap-1 items-center">
                <FaDollarSign className="text-blue-500 text-[20px]" />{" "}
                <Info style={"text-[16px]"} text={"Online Deposit"} />
              </div>
              <Link
                href={"/dashboard/wire"}
                className="flex gap-1 items-center"
              >
                <BiTransfer className="text-blue-500 text-[20px]" />{" "}
                <h1 className="text-[16px]">Wire Transfer</h1>
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sider;
