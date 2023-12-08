'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { DownloadPicture, GetCampaign, GetDownloadPicture } from "@/app/api/services/firebase";
import { Camera, Download } from "lucide-react";
import { saveAs } from 'file-saver';

type PageProps = {
  params: {
    slug: string
    id: string
  }
};

export default function PageDownload({ params: { slug, id } }: PageProps){
  const [loading, setLoading] = useState(true);
  const [campaignData, setCampaignData] = useState<any>({});
  const [downloadData, setDownloadData] = useState<any>({});

  const download = (filename: string, content: string) => {
    var element = document.createElement("a");
    element.setAttribute("href", content);
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const handleDownload = async () => {
    try {
      const imageUrl = downloadData ? downloadData.picture.stringValue : null;
      const result = await fetch(imageUrl, {
        method: "GET",
        headers: {}
      });
      const blob = await result.blob();
      // console.log('BLOBBB', blob);
      const url = URL.createObjectURL(blob);
      download("download.jpg", url);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };

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

  const handleDownloadBackup = () => {
    // Realize a solicitação para obter os dados da imagem
    const imageUrl = downloadData ? downloadData.picture.stringValue : null;
    if(imageUrl){
      fetch(imageUrl, {
        mode: 'no-cors'
      })
        .then(response => {
          console.log('response', response);
          return response.blob();
        })
        .then(blob => {
          // console.log('blob', blob);
          // Use o file-saver para iniciar o download do blob
          saveAs(blob, 'download.jpg');
          saveApiDownload(slug, id, JSON.stringify({}));
        })
        .catch(error => console.error('Erro ao baixar a imagem:', error));
    }
  };

  const saveApiDownload = async (campId:string, picId: string, userData: string) => {
    try{
      await DownloadPicture({
        campId, picId, userData,
        createdAt: new Date().toISOString()
      });
    }catch(err){
      console.log('saveApiDownloadError', err);
    }
  }
  
  return (!campaignData.template_campaign ? <>
    {loading ? <>
      <div className="mt-12 text-4xl uppercase font-[BetterWithNarrow] tracking-widest flex flex-col justify-center items-center gap-8">
        <div role="status">
          <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        <p className="w-full text-center">carregando imagem e<br/>preparando download...</p>
      </div>
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
      {downloadData.picture && <>
        <button onClick={handleDownload} className="uppercase absolute flex gap-2 items-center text-white bg-[#D3303D] text-xl p-3 px-12 shadow-lg hover:shadow-xl bottom-12 border border-white rounded-lg transition duration-300 disabled:cursor-not-allowed disabled:bg-zinc-500 ease-in-out font-semibold hover:bg-red-500">
          <Download />
          baixar foto
        </button>
      </>}
    </>}
  </> : campaignData.template_campaign &&
              campaignData.template_campaign.stringValue === 'cocacola' ? <>
                <div className="flex flex-col justify-center items-center mt-12">
                  {/*<div className="px-16 mb-8 text-center uppercase text-6xl font-[BetterWithNarrow]">{`sua foto está disponível para download!`}</div>*/}
                  <div className="text-white my-6 relative bg-black/90 min-w-[310px] min-h-[420px] md:min-w-[600px] md:min-h-[800px] border-2 border-white m-auto flex justify-center items-center overflow-hidden">
                    {downloadData.picture && <Image
                      src={downloadData.picture.stringValue}
                      fill
                      alt="my picture" 
                      style={{
                        objectFit: "cover"
                      }}
                    />}
                  </div>
                  <div className="flex my-8 mb-4">
                    {downloadData.picture && <button
                      className="bg-white text-[#df040c] font-[BetterWithNarrow] p-2 text-4xl uppercase px-12 disabled:cursor-not-allowed disabled:opacity-25 hover:scale-105"
                      onClick={handleDownload}
                    >
                      baixar foto
                    </button>}
                  </div>
                </div>
              </> : <></>)
};