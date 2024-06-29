import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import React from "react";
import MobileSideBar from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="felx items-center p-4">
      <MobileSideBar />
      <div className=" flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
