import { useEffect, useState } from "react";
import { GetCampaign } from "@/app/api/services/firebase";
import Image from "next/image";
import ModalTermos from "@/components/modalTermos";
import { ButtonsComponent } from "@/components/terms/buttons";

type PageProps = {
  params: {
    slug: string;
  };
  searchParams: Record<string, string> | null | undefined;
};

export default async function TermsPage({
  params: { slug },
  searchParams
}: PageProps) {
  const campaignData: any = await GetCampaign(slug);
  const showModalTerms: boolean = !!searchParams?.showTermos;
  const isAccept: boolean = !!searchParams?.accept_all;

  return (
    <>
      {campaignData.template_campaign &&
      campaignData.template_campaign.stringValue === "cocacola" ? (
        <>
          <div className="w-full flex flex-col gap-8 mx-auto max-w-lg mt-24 font-[BetterWithNarrow] tracking-wide uppercase items-center">
            <ButtonsComponent isAccept={isAccept} slug={slug} />
            <div className="text-center select-none mt-40">
              <Image
                src="/assets/templates/cocacola/enfeites-termos.png"
                width={600}
                height={250}
                alt="enfeites"
              />
            </div>
          </div>
        </>
      ) : campaignData.template_campaign &&
        campaignData.template_campaign.stringValue === "garnier" ? (
        <>
          <div className="w-full flex flex-col gap-8 mx-auto max-w-lg mt-24 tracking-tighter uppercase items-center pb-44">
            <ButtonsComponent
              isAccept={isAccept}
              slug={slug}
              template={
                campaignData.template_campaign
                  ? campaignData.template_campaign.stringValue
                  : null
              }
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-0">
              <Image
                src="/assets/templates/garnier/product-vitamina-c.png"
                width={380}
                height={180}
                alt="product vitamina c"
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {showModalTerms && (
        <>
          <ModalTermos
            slug={slug}
            template_campaign={
              campaignData.template_campaign
                ? campaignData.template_campaign.stringValue
                : null
            }
          />
        </>
      )}
    </>
  );
}
