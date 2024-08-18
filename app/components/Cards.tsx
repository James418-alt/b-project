import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsThreeDots } from "react-icons/bs";

const Cards = ({ title }: any) => {
  return (
    <div className="flex ">
      <Card className="w-[450px] h-[400px]">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <h1 className="text-[20px]">{title}</h1>
            <BsThreeDots className="text-neutral-500 text-[20px]" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
