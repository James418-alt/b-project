"use client";
import Spinner from "@/app/components/Spinner";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Page = () => {
  const redirect = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const formAction = async (formData: FormData) => {
    setLoading(true);
    try {
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const url = `https://vaultdesk.vercel.app/api/signup/66c226878f2cb7cc93f7c69d`;
      await fetch(url, {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      }).then(() => {
        redirect.push("/signin");
      });
    } catch (error) {
      console.log(error);
    }
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
              <label className="text-[13px] font-semibold">Full Name</label>
              <input
                placeholder="Enter your email here"
                className="border outline-none rounded-sm h-[35px] px-2"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col gap-0">
              <label className="text-[13px] font-semibold">Email</label>
              <input
                placeholder="Enter your email here"
                className="border outline-none rounded-sm h-[35px] px-2"
                type="text"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col gap-0">
              <label className="text-[13px] font-semibold">Password</label>
              <div className="flex justify-between items-center border rounded-sm pr-3">
                <input
                  placeholder="Enter your password here"
                  className="outline-none rounded-sm h-[35px] px-2 w-full"
                  type={show ? "text" : "password"}
                  name="password"
                  required
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
                {loading ? <Spinner /> : "Sign Up"}
              </button>

              <p className="text-[12px] font-normal">
                Already have an account?{" "}
                <Link href={"/signin"} className="italic font-semibold">
                  Sign In
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
