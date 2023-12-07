import { GetCampaign } from "@/app/api/services/firebase";
import Link from "next/link";
import Image from 'next/image';

type PageProps = {
  params: {
    slug: string
  }
};

export default async function PageCampaign({ params: { slug } }: PageProps){
  const campaignData:any = await GetCampaign(slug);
  return (<>
  {!campaignData.template_campaign ? <>
    <div className="w-full text-center py-8 lg:px-32 flex flex-col">
      <h3 className="text-4xl font-bold">{campaignData.phrase_1 ? campaignData.phrase_1.stringValue : ``}</h3>
      <span className="my-8 text-2xl font-semibold text-[#D3303D]">{campaignData.phrase_2 ? campaignData.phrase_2.stringValue : ``}</span>
    </div>
    <Link href={`/campaign/${slug}/templates`} className="uppercase absolute text-white bg-[#D3303D] shadow-lg hover:shadow-xl text-xl p-3 px-12 -bottom-7 border border-white rounded-lg transition duration-300 ease-in-out font-semibold hover:bg-red-500">
      toque para iniciar
    </Link>
  </> : campaignData.template_campaign &&
            campaignData.template_campaign.stringValue === 'cocacola' ? <>
              <div className="w-full text-center mt-24 py-8 lg:px-32 flex flex-col">
                <h3 className="text-5xl w-2/3 mx-auto font-[BetterWithNarrow] tracking-wide uppercase">{campaignData.phrase_1 ? campaignData.phrase_1.stringValue : ``}</h3>
                <div className="my-24 w-full min-h-[660px] relative">
                  <Image className="absolute right-0 top-0 z-40 select-none" src="/assets/templates/cocacola/noel.png" width={420} height={656} alt="papai noel" />
                  <Link
                    href={`/campaign/${slug}/terms`}
                    className="absolute bg-white font-[TCCCHolidays23Narrow] font-medium p-6 px-24 pr-40 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-[#df040c] text-7xl uppercase hover:scale-110 transition duration-300 ease-in-out"
                  >
                    iniciar
                  </Link>
                  <Image className="absolute left-12 bottom-0 z-40" src="/assets/templates/cocacola/enfeites.png" width={372} height={550} alt="enfeites" />
                </div>
                <span className="my-8 text-5xl mx-auto w-2/4 font-[TCCCHolidays23Curated]">{campaignData.phrase_2 ? campaignData.phrase_2.stringValue : ``}</span>
              </div>
            </> : <></>}
  </>)
}