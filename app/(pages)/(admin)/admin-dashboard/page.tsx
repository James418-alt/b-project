import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit, MdUpdate } from "react-icons/md";
import Balance from "../components/Balance";

const page = async () => {
  // const url = `https://vaultdesk.vercel.app/api/users`;
  // const url = `http://localhost:3000/api/admin/66c226878f2cb7cc93f7c69d`;
  const url = `https://vaultdesk.netlify.app/api/admin/66c226878f2cb7cc93f7c69d`;
  const res = await fetch(url, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await res.json();
  // console.log(data);

  return (
    <div>
      <div className=" border-[2px] border-black rounded-md p-1 h-[90vh] m-2">
        <h1>Clients</h1>
        {data?.data?.map((el: any, id: number) => (
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

export default page;
