import { GetCampaign } from "@/app/api/services/firebase";
import LocationTag from "@/components/locationTag";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Totem de Fotos",
  description: "Totem de fotos personalizadas"
};

export default async function CampaignLayout({
  params: { slug },
  children
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  const campaignData: any = await GetCampaign(slug);
  return (
    <body className={`overflow-hidden select-none`}>
      <div
        style={
          campaignData.background
            ? { backgroundImage: `url(${campaignData.background.stringValue})` }
            : {}
        }
        className={`w-full h-screen bg-cover bg-center overflow-hidden flex justify-center items-center`}
      >
        {!campaignData.template_campaign ? (
          <>
            <div className="bg-white w-full min-h-[350px] m-auto max-w-2xl rounded-lg p-4 flex justify-center items-start pt-16 relative">
              <div className="absolute w-48 h-48 -top-28">
                {campaignData.logo && (
                  <Image
                    fill
                    src={`${campaignData.logo.stringValue}`}
                    alt="logo-campaign"
                  />
                )}
              </div>
              {children}
            </div>
          </>
        ) : campaignData.template_campaign &&
          campaignData.template_campaign.stringValue === "cocacola" ? (
          <>
            <div className="w-full h-screen flex justify-center items-center flex-col">
              {campaignData.logo && (
                <Image
                  width={280}
                  height={88}
                  src={`${campaignData.logo.stringValue}`}
                  alt="logo-campaign"
                />
              )}
              <div className="w-full text-white">{children}</div>
            </div>
          </>
        ) : campaignData.template_campaign &&
          campaignData.template_campaign.stringValue === "garnier" ? (
          <>
            <div className="w-full h-screen flex justify-center items-center flex-col">
              {campaignData.logo && (
                <Image
                  width={380}
                  height={188}
                  src={`${campaignData.logo.stringValue}`}
                  alt="logo-campaign"
                />
              )}
              <div className="w-full text-white">{children}</div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <LocationTag />
    </body>
  );
}
