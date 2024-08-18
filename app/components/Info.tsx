import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdAdd } from "react-icons/md";

const Info = ({ text, style }: any) => {
  return (
    <Dialog>
      <DialogTrigger className={style}>{text}</DialogTrigger>
      <DialogContent className="w-[300px] md:w-[450px]">
        <DialogHeader>
          <DialogTitle className="border-b pb-3">
            Virtual Banking Details
          </DialogTitle>
          <DialogDescription>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div className="flex items-start flex-col gap-1">
                <h1 className="text-neutral-700 text-[13px] font-semibold">
                  Virtual Account Name
                </h1>
                <p className="border w-full p-1 rounded-md">VautFinance</p>
              </div>
              <div className="flex items-start flex-col gap-1">
                <h1 className="text-neutral-700 text-[13px] font-semibold">
                  Virtual Account Number
                </h1>
                <p className="border w-full p-1 rounded-md">08630982</p>
              </div>
              <div className="flex items-start flex-col gap-1">
                <h1 className="text-neutral-700 text-[13px] font-semibold">
                  Virtual Routine Number
                </h1>
                <p className="border w-full p-1 rounded-md">9872729182</p>
              </div>
              <div className="flex items-start flex-col gap-1">
                <h1 className="text-neutral-700 text-[13px] font-semibold">
                  Virtual Swift Code
                </h1>
                <p className="border w-full p-1 rounded-md">23GZW9</p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Info;
