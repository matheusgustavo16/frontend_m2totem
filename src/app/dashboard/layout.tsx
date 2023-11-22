'use client'

import LayoutDash from "@/components/layoutDash";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function RootDashboard({
  children
}:{
  children: React.ReactNode
}) {

  const LIST_ADMINS = process.env.NEXT_EMAIL_ADMIN ? process.env.NEXT_EMAIL_ADMIN.split(',') : [];

  const session = useSession({
    required: true,
    onUnauthenticated(){
      redirect('/auth/login');
    }
  });

  return (<>
    {session && LIST_ADMINS.includes(session?.data?.user?.email as string) && <>
      <LayoutDash>
        {children}
      </LayoutDash>
    </>}
    {session && !LIST_ADMINS.includes(session?.data?.user?.email as string) && <>
      ⚠️ Acesso bloqueado, área somente para administradores.
    </>}
  </>)
};
