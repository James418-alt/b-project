"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <div className="flex justify-center">
      <div className="border mt-5 rounded-md shadow-md p-2 w-[320px] md:w-[500px] h-[300px] md:h-[280px] flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-[20px] text-neutral-600 text-center font-medium">
            COT CODE <br /> VERIFICATION
          </h1>
          <p className="text-blue-400 font-light text-[13px] text-center mt-2">
            HELLO {user.data.name.toUpperCase()}, KINDLY INSERT YOUR COT CODE TO
            FACILITATE THE TRANSFER OF YOUR FUNDS
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            required
            className="border outline-none p-2 rounded-md w-full"
            placeholder="Input Code"
          />
          <button className="bg-blue-500 text-white font-mono text-[15px] rounded-md w-full py-2 ">
            Continue Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
