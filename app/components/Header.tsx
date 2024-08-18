"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { BiMessage } from "react-icons/bi";
import { CgNotifications } from "react-icons/cg";
import {
  MdComment,
  MdDoorbell,
  MdMenu,
  MdMessage,
  MdNotifications,
  MdSettings,
} from "react-icons/md";
import Confirm from "./Confirm";
import Sider from "./Sider";

const Header = () => {
  return (
    <div className="flex justify-between bg-blue-600 h-[50px] items-center px-3 md:px-10 ">
      <div>
        <Sider />
      </div>
      <div>
        <div className="flex gap-6">
          <MdNotifications className="text-[20px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
