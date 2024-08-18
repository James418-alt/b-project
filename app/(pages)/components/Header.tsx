import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="fixed w-[100%] ">
        <div className="flex justify-center px-4 py-2 md:p-2 bg-gray-100 text-[12px] md:text-[14px] text-neutral-600">
          <div className="flex gap-1">
            {" "}
            <h1 className="text-center">
              <span className="text-black font-bold">
                WIN THE WEEK IS BACK!
              </span>
              Use your account through 8/30/2024 for a chance to win $500 each
              week.{" "}
            </h1>
          </div>
        </div>
        <section className="flex justify-between bg-white shadow-sm items-center px-4 md:px-12 py-3 border-b border-b-neutral-300 mb-5">
          <Image
            src={"/logo.png"}
            alt="#"
            width={1000}
            height={1000}
            className="w-[100px] h-[50px]"
          />
          <div className="flex gap-2 items-center">
            <Link href={"/signin"} className="hidden md:block">
              Login
            </Link>
            <Link
              href={"/signup"}
              className="bg-[#002f51] text-white font-normal px-3 py-1 md:px-4 md:py-2 rounded-full"
            >
              Open an Account
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
