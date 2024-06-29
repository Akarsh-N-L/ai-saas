import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function landingPage() {
  return (
    <div>
      <p>Landing page</p>
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Register</Button>
      </Link>
    </div>
  );
}
