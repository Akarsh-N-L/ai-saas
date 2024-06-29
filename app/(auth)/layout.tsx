import React from "react";

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex justify-center items-center h-full">{children}</div>
  );
}
