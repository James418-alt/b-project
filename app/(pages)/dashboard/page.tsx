"use client";

import Cards from "@/app/components/Cards";
import Dashboard from "@/app/components/Dashboard";
import { setUser } from "@/app/global/slice";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const session: any = useSession();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const id = session.data?.user?.id;

  const getUser = async () => {
    const url = `/api/signin/${id}`;

    await fetch(url, { method: "GET", cache: "no-cache" }).then((res) => {
      res.json().then((data) => {
        dispatch(setUser(data));
      });
    });
  };
  useEffect(() => {
    getUser();
  }, [id]);
  // console.log(user);
  return (
    <main className="">
      <div className=" p-3 md:p-10 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="hidden md:block">
            <Cards title={"Summary"} />
          </div>
          <div className="hidden md:block">
            <Cards title={"Account Stats"} />
          </div>

          <Dashboard name={user?.data?.name} balance={user?.data?.balance} />
        </div>
      </div>
    </main>
  );
}
