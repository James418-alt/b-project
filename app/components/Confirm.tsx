import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MdLogout } from "react-icons/md";
import { signOut } from "next-auth/react";

const Confirm = ({ text }: any) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="flex items-center gap-1">
          <MdLogout className="text-[20px] text-blue-500" />
          <h1 className="text-[13px] text-neutral-600">{text}</h1>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[300px] md:w-[400px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to logout of your Account?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-[#002f51]"
            onClick={() => {
              signOut();
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Confirm;
