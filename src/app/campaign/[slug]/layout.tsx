import { GetCampaign } from '@/app/api/services/firebase';
import LocationTag from '@/components/locationTag';
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Totem de Fotos',
  description: 'Totem de fotos personalizadas',
}

export default async function CampaignLayout({
  params: { slug },
  children,
}: {
  params: { slug:string };
  children: React.ReactNode
}) {
  const campaignData:any = await GetCampaign(slug);
  return (
    <body className={`overflow-hidden select-none`}>
      <div style={campaignData.background ? { backgroundImage: `url(${campaignData.background.stringValue})` } : {}} className={`w-full h-screen bg-cover bg-center overflow-hidden flex justify-center items-center`}>
        <div className="bg-white w-full min-h-[350px] m-auto max-w-2xl rounded-lg p-4 flex justify-center items-start pt-16 relative">
          <div className="absolute w-48 h-48 -top-28">
            {campaignData.logo && <Image fill src={`${campaignData.logo.stringValue}`} alt="logo-campaign" />}
          </div>
          {children}
        </div>
      </div>
      <LocationTag />
    </body>
  )
}
