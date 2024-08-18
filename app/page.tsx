import { getServerSession } from "next-auth";
import React from "react";
import { options } from "./api/auth/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(options);

  if (session) {
    redirect("/dashboard");
  } else {
    redirect("/signin");
  }
};

export default page;
