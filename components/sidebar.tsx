"use client";
import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessagesSquare,
  ImageIcon,
  VideoIcon,
  Music,
  CodeIcon,
  SettingsIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: " text-sky-500",
  },
  {
    label: "Conversations",
    icon: MessagesSquare,
    href: "/conversations",
    color: " text-violet-500",
  },
  {
    label: "Image generation",
    icon: ImageIcon,
    href: "/image",
    color: " text-emerald-400",
  },
  {
    label: "Video generation",
    icon: VideoIcon,
    href: "/video",
    color: " text-orange-500",
  },
  {
    label: "Music generation",
    icon: Music,
    href: "/music",
    color: " text-pink-500",
  },
  {
    label: "Code generation",
    icon: CodeIcon,
    href: "/code",
    color: " text-green-600",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/settings",
    color: " text-gray-500",
  },
];

export default function Sidebar() {
  const pathName = usePathname();
  return (
    <div className=" space-y-4 py-4 flex flex-col h-full text-white bg-[#111827]">
      <div className=" px-3 py-2 flex-1">
        <Link href="/dashboard" className=" flex items-center pl-3 mb-14">
          <div className=" relative h-4 w-8 mr-4">
            {/* <Image fill alt="Logo" src="../" /> */}
            <h1 className={cn(" text-2xl font-bold", montserrat.className)}>
              Genie
            </h1>
          </div>
        </Link>
        <div className=" space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                " text-sm flex group p-3 w-full justify-start font-medium cursor-pointer rounded-lg hover:text-white hover:bg-white/10 transition",
                pathName === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className=" flex flex-1 items-center">
                <route.icon className={cn(" h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
