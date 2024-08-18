"use client";
import Spinner from "@/app/components/Spinner";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Page = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const formAction = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    signIn("credentials", { email, password });
  };
  return (
    <main>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="border rounded-md w-[300px] md:w-[450px] min-h-[250px] shadow-md p-3 flex flex-col  gap-5 ">
          <div className="flex justify-center">
            <Image
              src={"/logo.png"}
              alt="#"
              width={1000}
              height={1000}
              className="w-[100px] h-[50px]"
            />
          </div>

          <form action={formAction} className="flex flex-col gap-3">
            <div className="flex flex-col gap-0">
              <label className="text-[13px] font-semibold">Email</label>
              <input
                placeholder="Enter your email here"
                className="border outline-none rounded-sm h-[35px] px-2"
                type="text"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-0">
              <label className="text-[13px] font-semibold">Password</label>
              <div className="flex justify-between items-center border rounded-sm pr-3">
                <input
                  placeholder="Enter your email here"
                  className="outline-none rounded-sm h-[35px] px-2 w-full"
                  type={show ? "text" : "password"}
                  name="password"
                />

                {show ? (
                  <IoMdEyeOff onClick={() => setShow(false)} />
                ) : (
                  <IoMdEye onClick={() => setShow(true)} />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-0">
              <button
                type="submit"
                className="p-3  text-white rounded-md bg-[#002f51]"
              >
                {loading ? <Spinner /> : "Sign In"}
              </button>
              <p className="text-[12px] font-normal">
                Already have an account?{" "}
                <Link href={"/signup"} className="italic font-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;
