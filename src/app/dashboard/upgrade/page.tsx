"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaStripe } from "react-icons/fa6";

const Upgrade = () => {
  const router = useRouter();
  const handleOnClick = async () => {
    const response = await axios.post("/api/upgrade/checkout");
    // push user to spripe url
    router.push(response.data.url);
  };

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white-rounded">
        <h2 className="font-medium">Buy Credits</h2>
      </div>
      <div className="mt-5 py-6 px-4 rounded">
        <Card className="w-[350px] flex flex-col mx-auto">
          <CardHeader>
            <CardTitle>₹ 299</CardTitle>
            <CardDescription className="flex justify-items-start">
              10,000 Credits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <p className="flex my-2 gap-2">
                <Check /> Add more credits to spend 💸
              </p>
              <p className="flex my-2 gap-2">
                <Check /> Early access to new templates 🐣
              </p>
              <p className="flex my-2 gap-2">
                <Check /> Retain history ⏪
              </p>
            </div>
            <div className="flex justify-between">
              <Button className="mt-5" onClick={handleOnClick}>
                Purchase
              </Button>
              <FaStripe className="h-12 w-12 mt-4" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upgrade;
