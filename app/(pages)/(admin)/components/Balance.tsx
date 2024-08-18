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
import { MdEdit, MdLogout } from "react-icons/md";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Balance = ({ text, id }: any) => {
  const formAction = async (formData: FormData) => {
    const balance = formData.get("balance");
    const url = `https://vaultdesk.vercel.app/api/adminsignup/${id}`;
    await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({ balance }),
    }).then(() => {
      console.log("done");
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="flex items-center gap-1">
          <MdEdit />
          <h1 className="text-[13px] text-neutral-600">{text}</h1>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[300px] md:w-[400px]">
        <AlertDialogHeader>
          <form action={formAction}>
            <div className=" flex flex-col gap-1 items-start justify-start">
              <label className="text-start">Balance</label>
              <input
                className="p-1 outline-none border rounded-md w-full"
                type="text"
                name="balance"
                placeholder="Enter balance"
              />
            </div>
            <Button type="submit" className="w-full mt-3">
              Update
            </Button>
          </form>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Balance;
