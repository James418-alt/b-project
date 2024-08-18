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

const Oops = ({ text, style, dis }: any) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger disabled={dis} className={style}>
        <h1>{text}</h1>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[300px] md:w-[400px]">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Sorry you don't have sufficient funds
          </AlertDialogTitle>
          <AlertDialogDescription>
            Kindly top up your account and try again
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Oops;
