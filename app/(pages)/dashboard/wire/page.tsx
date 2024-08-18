"use client";
import Confirm from "@/app/components/Confirm";
import Oops from "@/app/components/Oops";
import Sider from "@/app/components/Sider";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa6";
const Page = () => {
  const [amount, setAmount]: any = useState();
  const [show, setShow] = useState(false);
  const session: any = useSession();
  const [user, setUser]: any = useState({});

  const id = session.data?.user?.id;

  const getUser = async () => {
    const url = `/api/signin/${id}`;

    await fetch(url, { method: "GET", cache: "no-cache" }).then((res) => {
      res.json().then((data) => {
        setUser(data);
      });
    });
  };
  useEffect(() => {
    getUser();
  }, [id]);
  const balance = user?.data?.balance;
  const formAction = async () => {
    return redirect("/dashboard/cot");
  };

  const changed = (e: any) => {
    setAmount(e.target.value);
    if (amount > balance) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="flex justify-center mt-14 ">
      <form
        action={formAction}
        className="p-2 w-[95%] md:w-[700px] border shadow-md"
      >
        <h1 className="text-center font-serif text-[23px] mb-10 pt-3">
          Wire Transfer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-1 ">
            <label className="text-neutral-600 font-light">Amount</label>
            <div className="flex items-center  gap-1 px-1 border rounded-md">
              <FaDollarSign />
              <input
                type="number"
                placeholder="Amount"
                required
                className=" outline-none w-full py-1"
                name="amount"
                value={amount}
                onChange={changed}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-neutral-600 font-light">
              Beneficiary Account Name
            </label>
            <input
              type="text"
              required
              className="border outline-none p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-neutral-600 font-light">Bank Name</label>
            <input
              type="text"
              required
              className="border outline-none p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-neutral-600 font-light">
              Beneficiary Account Number
            </label>
            <input
              type="number"
              required
              className="border outline-none p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-neutral-600 font-light">
              Routine Number
            </label>
            <input
              type="text"
              required
              className="border outline-none p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-neutral-600 font-light">Swift Code</label>
            <input
              type="text"
              required
              className="border outline-none p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-neutral-600 font-light">Account Type</label>
            <select
              name="options"
              required
              className="outline-none border p-1 flex flex-col gap-3"
            >
              <option>Select Account Type</option>
              <option>Checking Account</option>
              <option>Savings Account</option>
              <option>Current Account</option>
              <option>Fixed Deposit Account</option>
              <option>Non-Resident Account</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-neutral-600 font-light">Country</label>

            <input
              type="text"
              required
              className="border outline-none p-1 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full  mt-2 mb-2">
          <label className="text-neutral-600 font-light">Naration</label>
          <input
            type="text"
            required
            className="border outline-none p-1 h-[50px] rounded-md"
          />
        </div>
        <div className="w-full">
          {show ? (
            <div className="w-full">
              <Oops
                text={"Transfessd"}
                style={
                  "bg-blue-500 w-full py-2 p-1 rounded-md text-white font-mono text-[14px]"
                }
                dis={show ? "" : ""}
              />
            </div>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 w-full py-2 p-1 rounded-md text-white font-mono text-[14px]"
            >
              Transfer
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Page;
