"use client";
import {
  CodeIcon,
  ImageIcon,
  MessagesSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    lable: "conversation",
    icon: MessagesSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    lable: "Image",
    icon: ImageIcon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/image",
  },
  {
    lable: "Video",
    icon: VideoIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/video",
  },
  {
    lable: "Music",
    icon: Music,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/music",
  },
  {
    lable: "Code",
    icon: CodeIcon,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/code",
  },
];

export default function DashBoardPage() {
  const router = useRouter();
  return (
    <>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl font-bold md:text-4xl text-center">
          Explore the power of AI
        </h2>
        <p className=" text-muted-foreground text-sm font-light md:text-lg text-center">
          chat with the smartest AI available in the market..!
        </p>
      </div>
      <div className=" px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className=" flex items-center gap-x-4">
              <div className={cn(" p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn(" w-8 h-8", tool.color)} />
              </div>
              <div className=" font-semibold ">{tool.lable}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </>
  );
}
