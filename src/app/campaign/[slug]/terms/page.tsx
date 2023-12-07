
import { useEffect, useState } from "react";
import { GetCampaign } from "@/app/api/services/firebase";
import Image from 'next/image';
import ModalTermos from "@/components/modalTermos";
import toast from "react-hot-toast";
import { ButtonsComponent } from "@/components/terms/buttons";

type PageProps = {
  params: {
    slug: string
  },
  searchParams: Record<string, string> | null | undefined;
};

export default async function TermsPage({ params: { slug }, searchParams }: PageProps){
  
  const showModalTerms: boolean = !!searchParams?.showTermos;
  const isAccept: boolean = !!searchParams?.accept_all;

  return <>
    <div className="w-full flex flex-col gap-8 mx-auto max-w-lg mt-24 font-[BetterWithNarrow] tracking-wide uppercase items-center">
      <ButtonsComponent isAccept={isAccept} slug={slug} />
      <div className="text-center select-none mt-40">
        <Image src="/assets/templates/cocacola/enfeites-termos.png" width={600} height={250} alt="enfeites" />
      </div>
    </div>
    {showModalTerms && <>
      <ModalTermos slug={slug} />
    </>}
  </>
}