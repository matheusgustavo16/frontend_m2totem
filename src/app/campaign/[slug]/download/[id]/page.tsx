'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { GetCampaign, GetDownloadPicture } from "@/app/api/services/firebase";
import { Camera, Download } from "lucide-react";
import { saveAs } from 'file-saver';

type PageProps = {
  params: {
    slug: string
    id: string
  }
}

export default function PageDownload({ params: { slug, id } }: PageProps){
  const [loading, setLoading] = useState(false);
  const [campaignData, setCampaignData] = useState<any>({});
  const [downloadData, setDownloadData] = useState<any>({});

  const getCampData = async() => {
    try{
      setLoading(true);
      const _campaignData:any = await GetCampaign(slug);
      setCampaignData(_campaignData);
      const _downdata:any = await GetDownloadPicture(id);
      setDownloadData(_downdata);
    }catch(err){
      console.log('getCampData', err);
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{
    getCampData();
  }, []);

  const downloadFile = () => {
    saveAs(downloadData.picture.stringValue, `${new Date().toISOString()}.jpg`);
  };
  
  return (<>
    {loading ? <>
      <p className="text-center text-zinc-400 pt-12">carregando...</p>
    </> : <>
      <div className="pb-12 pt-8 flex flex-col justify-center items-center">
        <div className="relative rounded-lg overflow-hidden w-full max-w-[600px] min-h-[370px] h-80">
          {downloadData.picture && <Image src={downloadData.picture.stringValue} fill alt="download foto" />}
        </div>
        <p className="lg:px-32 font-semibold text-center mt-6 text-xl">
          {campaignData.phrase_download ? campaignData.phrase_download.stringValue : <>
            ✨ Sua foto ficou incrível!<br/>
            Faça o download em minutos escaneando o QR Code acima...
          </>}
        </p>
      </div>
      <button onClick={() => downloadFile()} className="uppercase absolute flex gap-2 items-center text-white bg-[#D3303D] text-xl p-3 px-12 shadow-lg hover:shadow-xl -bottom-7 border border-white rounded-lg transition duration-300 disabled:cursor-not-allowed disabled:bg-zinc-500 ease-in-out font-semibold hover:bg-red-500">
        <Download />
        baixar foto
      </button>
    </>}
  </>)
};