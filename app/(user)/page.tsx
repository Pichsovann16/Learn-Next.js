"use client";
import { useRouter } from "next/navigation";
import React from "react";

//Chage this to null to see the erro page
//const session = null
const session = "Some session data";
export default function Home() {
  const router = useRouter();

  //erro.tsx will be rendered if session is null
  if (!session) {
    throw new Error("Auth is required to access this page");
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      <button
        onClick={() => router.push("/enroll")}
        className="p-4 bg-blue-300 rounded-xl"
      >
        Enroll Now
      </button>
    </div>
  );
}
