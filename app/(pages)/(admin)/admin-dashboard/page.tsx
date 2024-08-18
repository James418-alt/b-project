"use client";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit, MdUpdate } from "react-icons/md";
import Balance from "../components/Balance";

const Page = () => {
  const [clients, setClients]: any = useState({});
  ``;
  const getClients = async () => {
    const url = `https://vaultdesk.vercel.app/api/adminsignup`;
    await fetch(url, { method: "GET", cache: "no-cache" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        window.location.reload();
        setClients(data);
      });
  };
  useEffect(() => {
    getClients();
  }, []);

  return (
    <div>
      <div className=" border-[2px] border-black rounded-md p-1 h-[90vh] m-2">
        <h1>Clients</h1>
        {clients?.data[0].clients?.map((el: any, id: number) => (
          <div
            key={id}
            className="border mt-5 p-1 rounded-md flex justify-between items-center"
          >
            <div>
              <h1 className="text-[18px] font-medium text-neutral-600">
                {el?.name}
              </h1>

              <p className="text-[12px] font-light text-neutral-500">
                {" "}
                {el?.email}
              </p>
            </div>
            <div className=" flex items-center gap-3">
              <MdDelete />
              <Balance id={el?._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
