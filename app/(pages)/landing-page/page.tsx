"use client";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import Spinner from "@/app/components/Spinner";

const page = () => {
  const img = [
    { alt: "#", src: "/logo1.svg", text: "Open Account" },
    { alt: "#", src: "/logo4.svg", text: "Agent Banking" },
    { alt: "#", src: "/logo5.svg", text: "Contact Us" },
    { alt: "#", src: "/logo2.svg", text: "Find a Branch" },
    { alt: "#", src: "/logo3.svg", text: "Loan Calculator" },
    { alt: "#", src: "/logo6.svg", text: "Sustainaility" },
  ];
  const security = [
    { name: "Anti-Fraud" },
    { name: "Security Tips" },
    { name: "Secure Code" },
  ];
  const contact = [
    { name: "Contact Form" },
    { name: "Find an Agent" },
    { name: "Locate a Branch" },
    { name: "Whistle blowing" },
    { name: "In-person meeting " },
    { name: "Co-operate Information" },
  ];
  const legal = [
    { name: "Terms of use" },
    { name: "Coockie Policy" },
    { name: "Privacy Policy" },
    { name: "Communication Policy" },
  ];
  const banking = [
    { name: "Co-operate Information" },
    { name: "Personal Banking" },
    { name: "Business Banking" },
    { name: "Loan Calculator" },
    { name: "Vendor Portal" },
    { name: "Download Form" },
  ];
  return (
    <div>
      <Header />
      <section className="md:px-32 px-16 py-3 pt-[100px] md:pt-[50px]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src={"/bg4.png"}
              alt="#"
              width={1000}
              height={1000}
              className=" h-[450px] w-[500px] md:w-[500px] md:h-[650px] rounded-sm"
            />
          </div>
          <div className="col-span-1 flex flex-col items-center gap-4 justify-center">
            <h1 className="text-center leading-[25px] md:leading-[40px] text-[18px] md:text-[22px]">
              the ultimate mobile bank account <br />{" "}
              <span className="font-bold">Credit building</span> <br /> with no
              annual fee* <br />{" "}
              <span className="font-bold">
                Overdraft protection up to $200*
              </span>{" "}
              <br /> Apply or opt in after <br />
              eligible direct deposits
            </h1>
            <div className="flex flex-col justify-center items-center">
              <Link
                href={"/signup"}
                className="bg-[#002f51] text-white font-normal px-3 py-1 md:px-4 md:py-2 rounded-full"
              >
                Open an Account
              </Link>
              <Image
                src={"/fdic.svg"}
                alt="#"
                width={1000}
                height={1000}
                className="w-[70px] h-[70px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="bg-[#003b65] w-full p-10 grid grid-cols-3 gap-5 md:grid-cols-6 items-center">
          {img.map((el: any, id: number) => (
            <div
              className="flex justify-center flex-col gap-2 items-center"
              key={id}
            >
              <Image
                src={el.src}
                alt={el.alt}
                width={1000}
                height={1000}
                className="w-[70px] md:h-[70px]"
              />
              <p className="text-white text-[8px] font-medium md:text-[15px] lg:text-[18px]">
                {" "}
                {el.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-1">
            <Image
              src={"/pig.svg"}
              alt="#"
              width={1000}
              height={1000}
              className="w-[80px] h-[80px]"
            />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[15px]">
                Earn Well over the national saving rate average
              </h1>
              <p className="font-light text-[13px]">
                High-yield savings account, 4.50% APY paid quarterly on savings
                up to $5,000.*Interest paid quarterly on the average daily
                balance of all savings during the quarter up to a $5,000 average
                daily
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Image
              src={"/cashback.svg"}
              alt="#"
              width={1000}
              height={1000}
              className="w-[80px] h-[80px]"
            />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[15px]">
                Earn up to 7% cashback on every transaction
              </h1>
              <p className="font-light text-[13px]">
                when you buy eGift Cards from over 100 popular merchants in the
                app.*Activated, chip-enabled debit card required to purchase
                eGift Cards.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Image
              src={"/check.svg"}
              alt="#"
              width={1000}
              height={1000}
              className="w-[80px] h-[80px]"
            />
            <div>
              <h1 className="font-bold text-[15px]">Cash check fast or free</h1>

              <p className="font-light text-[13px]">
                Just snap a pic with your phone and get your money in minutes
                for a fee, or 10 days for free.*
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Image
              src={"/cash.svg"}
              alt="#"
              width={1000}
              height={1000}
              className="w-[80px] h-[80px]"
            />
            <div>
              <h1 className="font-bold text-[15px]">
                Your cash deposit spot is right here
              </h1>

              <p className="font-light text-[13px]">
                Deposit cash with your card or the app at a nearby retailer,
                with 90,000+ locations nationwide.*Retail service fee up to
                $4.95 and limits apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t mt-5 px-20 bg-[#003b65] ">
        <div className="grid grid-cols-2  md:grid-cols-4 gap-10 pt-10 pb-5">
          <div className=" flex flex-col gap-3">
            <h1 className="font-semibold text-[13px] text-white">BANKING</h1>
            <div className="flex flex-col gap-4 cursor-pointer">
              {banking.map((el: any, id: number) => (
                <p key={id} className="text-neutral-300 font-light text-[12px]">
                  {el.name}
                </p>
              ))}
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="font-semibold text-[13px] text-white">SECURITY</h1>
            <div className="flex flex-col gap-4 cursor-pointer">
              {security.map((el: any, id: number) => (
                <p key={id} className="text-neutral-300 font-light text-[12px]">
                  {el.name}
                </p>
              ))}
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="font-semibold text-[13px] text-white">CONTACT US</h1>
            <div className="flex flex-col gap-4 cursor-pointer">
              {contact.map((el: any, id: number) => (
                <p key={id} className="text-neutral-300 font-light text-[12px]">
                  {el.name}
                </p>
              ))}
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="font-semibold text-[13px] text-white">LEGAL</h1>
            <div className="flex flex-col gap-4 cursor-pointer">
              {legal.map((el: any, id: number) => (
                <p key={id} className="text-neutral-300 font-light text-[12px]">
                  {el.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Spinner />
    </div>
  );
};

export default page;
