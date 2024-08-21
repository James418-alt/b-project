"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdAdd, MdHdrPlus } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Info from "./Info";
import Link from "next/link";
import { FiDollarSign } from "react-icons/fi";

const Dashboard = ({ name, balance }: any) => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex ">
      <Card className="w-[550px] md:w-[450px] h-[100vh] md:min-h-[400px] rounded-t-[20px]">
        <CardHeader className="relative rounded-[20px] bg-gradient-to-b from-blue-800 to-blue-950 h-[35%] w-full">
          <CardTitle>
            <div className="flex flex-col gap-5 ">
              <div className="flex justify-between items-center">
                <div className="flex justify-between w-full items-center">
                  <div className="text-[14px] text-white px-4 py-2 bg-[#6b48f557] rounded-full font-light">
                    {name}
                  </div>

                  <Info
                    style={
                      "text-[20px] text-white p-2 bg-[#6b48f557] rounded-full font-light"
                    }
                    text={<MdAdd color="white" />}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white mb-[-10px] font-extralight text-[20px] font-mono">
                    Balance
                  </h1>
                  <div className="flex flex-col gap-2 items-end mt-[-10px]">
                    {show ? (
                      <IoMdEyeOff
                        onClick={() => setShow(false)}
                        className="text-white text-[15px] justify-center items-center"
                      />
                    ) : (
                      <IoMdEye
                        onClick={() => setShow(true)}
                        className="text-white text-[15px] justify-center items-center"
                      />
                    )}
                    <div>
                      {show ? (
                        <div className="flex items-center">
                          <FiDollarSign className="text-white text-[16px]" />
                          {/* <DollarSign className="text-white text-[12px]" /> */}
                          <p className="text-white font-extralight text-[18px] font-mono">
                            {Number(balance).toLocaleString().concat(".00")}
                          </p>
                        </div>
                      ) : (
                        <p className="text-white font-extralight text-[18px] font-mono">
                          ****
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardTitle>
          <div className="flex justify-center items-center ">
            <div className="flex absolute gap-5  bottom-[-35px]">
              <div className="bg-white rounded-[10px] py-4 px-3 w-[160px] md:w-[150px] flex justify-center flex-col gap-3 shadow-lg h-[80px]">
                <p className="md:text-[15px] text-[13px] font-mono">Deposit</p>
                <Info
                  style={
                    "w-full shadow-md bg-blue-500 text-center rounded-sm text-[10px] text-white py-2"
                  }
                  text={"Deposit"}
                />
              </div>
              <div className="bg-white rounded-[10px] py-4 px-3 w-[160px] md:w-[150px] flex justify-center flex-col gap-3 shadow-lg h-[80px]">
                <p className="md:text-[15px] text-[13px] font-mono">Transfer</p>
                <Link
                  href={"/dashboard/wire"}
                  className="w-full shadow-md bg-green-500 text-center rounded-sm text-[10px] text-white py-2"
                >
                  Transfer
                </Link>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardFooter className="mt-[70px]">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex w-full justify-between items-center text-neutral-600 font-serif">
              <div>
                <h1>Transfer Limit</h1>
              </div>
              <div className="text-green-600">$10,000.00</div>
            </div>
            <div className="flex w-full justify-between items-center text-neutral-600 font-serif">
              <div>
                <h1>Pending Amount</h1>
              </div>
              <div className="text-red-600">$0.00</div>
            </div>
            <div className="flex w-full justify-between items-center text-neutral-600 font-serif">
              <div>
                <h1>Recent Transfer</h1>
              </div>
              <div className="text-green-600">$7,000.00</div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dashboard;
