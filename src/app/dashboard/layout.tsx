'use client'

import LayoutDash from "@/components/layoutDash";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function RootDashboard({
  children
}:{
  children: React.ReactNode
}) {

  const session = useSession({
    required: true,
    onUnauthenticated(){
      redirect('/auth/login');
    }
  });

  return (<>
    {session && session?.data?.user?.email === process.env.NEXT_EMAIL_ADMIN && <>
      <LayoutDash>
        {children}
      </LayoutDash>
    </>}
    {session && session?.data?.user?.email !== process.env.NEXT_EMAIL_ADMIN && <>
      ⚠️ Acesso bloqueado, área somente para administradores.    
    </>}
  </>)
};
