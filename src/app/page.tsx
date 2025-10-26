"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
      <Button
        onClick={() => {
          window.prompt("message");
        }}
      >
        Click me
      </Button>
    </>
  );
}
