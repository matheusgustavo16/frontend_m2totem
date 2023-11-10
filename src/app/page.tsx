'use client'

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const session = useSession();

  useEffect(() => {
    if(session){
      redirect('/dashboard');
    }
  }, [session]);

  return (<>
    <div className="w-full h-screen bg-zinc-700 text-white flex flex-col justify-center items-center">
      <p className="text-lg tracking-wide text-zinc-300 font-semibold">Welcome to Totemfy</p>
      <p>Developed by <small>@cowestside</small></p>
    </div>
  </>)
};
