import { GetCampaign } from "@/app/api/services/firebase";
import Link from "next/link";

type PageProps = {
  params: {
    slug: string
  }
}

export default async function PageCampaign({ params: { slug } }: PageProps){
  const campaignData:any = await GetCampaign(slug);
  return (<>
    <div className="w-full text-center py-8 px-32 flex flex-col">
      <h3 className="text-4xl font-bold">{campaignData.phrase_1 ? campaignData.phrase_1.stringValue : ``}</h3>
      <span className="my-8 text-2xl font-semibold text-[#D3303D]">{campaignData.phrase_2 ? campaignData.phrase_2.stringValue : ``}</span>
    </div>
    <Link href={`/campaign/${slug}/templates`} className="uppercase absolute text-white bg-[#D3303D] shadow-lg hover:shadow-xl text-xl p-3 px-12 -bottom-7 border border-white rounded-lg transition duration-300 ease-in-out font-semibold hover:bg-red-500">
      toque para iniciar
    </Link>
  </>)
}