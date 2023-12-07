{
  /* 'use client'

import { useState, useRef, useEffect, useCallback } from "react"
import ApprovePictureComponent from "@/components/approvePicture"
import CountdownComponent from "@/components/countdown"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Webcam from "react-webcam"
import QRCode from "react-qr-code"
import { AddQrPicture, GetCampaign, GetPhrases, GetTemplates } from "@/app/api/services/firebase"
import { ref, uploadString } from "firebase/storage"
import { storage } from "@/utils/firebase"
import toast from "react-hot-toast"
import { applyPhraseToPicture, removeBg } from "@/app/api/services/photo"

type PageProps = {
  params: {
    slug: string
  }
}

export default function PageTemplates({ params: { slug } }: PageProps){
  const videoRef:any = useRef(null);
  const router = useRouter();
  const [campaignData, setCampaignData] = useState<any>({});
  const [template, setTemplate] = useState<any>({});

  const [templates, setTemplates] = useState<any>([]);
  const [phrases, setPhrases] = useState<any>([]);
  const [countdown, setCountdown] = useState<number|null>(null);
  const [preview, setPreview] = useState<string|null>(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [download, setDownload] = useState<boolean>(false);
  const [qrCode, setQrCode] = useState<string|null>(null);

  const getTemplates = async() => {
    const templatesData:any = await GetTemplates(slug);
    setTemplates(templatesData);
    templatesData[0] && setTemplate(templatesData[0]);
    const _campaignData:any = await GetCampaign(slug);
    setCampaignData(_campaignData);
    await getPhrases();
  };

  const getPhrases = async() => {
    const templatesData:any = await GetPhrases(slug);
    setPhrases(templatesData);
  };

  useEffect(()=>{
    getTemplates();
  }, []);

  const capture = useCallback(() => {
    setDownload(false);
    const imageSrc = videoRef.current.getScreenshot();
    // console.log('DIGAXXXXX', imageSrc);
    // setPreview(imageSrc);
    processPhoto(imageSrc, template);
  }, [videoRef, template]);

  const processPhoto = async(image:string, _template: any) => {
    try{
      setProcessing(true);
      const removed:any = await removeBg(image, _template.bg);
      // console.log('removeddd', removed);
      if(removed.photo){
        setProcessing(false);
        setPreview(removed.photo);
      }
    }catch(err:any){
      setProcessing(false);
      setCountdown(null);
      toast.error(`Falha ao processar a imagem, tente novamente mais tarde...`);
      console.log('captureError', err);
    }
  };

  const onFinishCountdown = async () => {
    // tira a foto
    await capture();
    // retira o bg da foto
    // aplica o bg do template selecionado
    // retorna a foto finalizada para aprovação ou refação do fluxo
    // setCountdown(null);
    // setPreview('image');
  };

  const startCountdownToHome = () => {    
    setTimeout(() => {
      router.push(`/campaign/${slug}`);
    }, 20000);
  }

  const handleUploadFile = async (imageFile: any) => {
    if(imageFile){
      const name = new Date().getTime();
      // const name = new Date().toISOString();
      const storageRef = ref(storage, `pictures/${name}.jpg`);
      uploadString(storageRef, imageFile, 'data_url')
        .then(async(data:any) => {
          // console.log("handleUploadFile", data);
          const addQr:any = await AddQrPicture({
            createdAt: new Date().toISOString(),
            stationId: localStorage.getItem("stationId") || "Não Identificada",
            campaignId: slug,
            picture: `https://firebasestorage.googleapis.com/v0/b/m2totem.appspot.com/o/${data.metadata.fullPath.replaceAll('/','%2F')}?alt=media`
          });
          if(addQr){
            setQrCode(`${window.location.origin}/campaign/${slug}/download/${addQr}`);
            setDownload(true);
            startCountdownToHome();
          }
        })
        .catch((err) => {
          console.log("uploadStringError", err);
        })
    }else{
      console.log('Selecione arquivo valido');
      return false;
    }
  };

  const applyPhrase = async (image: string, phrase: string) => {
    try{
      const applied:any = await applyPhraseToPicture(image, phrase);
      // console.log('applyPhrase', applied);
      await handleUploadFile(applied.photo);
    }catch(err:any){
      toast.error(`Falha ao aplicar a frase na imagem, tente novamente mais tarde...`);
      console.log('captureError', err);
    }
  };

  const onHandleApproveButton = async(approved: number, phrase?: string|null) => {
    // clicou na aprovação
    if(approved && preview){
      if(!phrase){
        toast.error(`Selecione uma frase a ser aplicada!`);
      }else{
        await applyPhrase(preview, phrase);
      }
    }else{
      setQrCode(null);
      setDownload(false);
      setCountdown(null);
      setPreview(null);
    }
  };

  return (<>
    {typeof countdown === 'number' && <CountdownComponent seconds={countdown} onFinish={onFinishCountdown} />}
    {!download && !preview && <>
      <div className={`w-full text-center py-8 lg:px-12 flex flex-col ${typeof countdown !== 'number' ? `` : `absolute -top-[999%] -left-[999%]`}`}>
        <div className="text-white relative bg-black my-6 min-w-[100%] min-h-[400px] m-auto rounded-xl flex justify-center items-center overflow-hidden">
          <div className="absolute w-full h-full bg-black">
            {template && template.bg && template.bg !== '' && <Image
              src={template.bg}
              fill
              alt="template background" 
              style={{
                objectFit: "cover"
              }}
            />}
          </div>
          <div className="absolute w-full h-full opacity-75">
            <Webcam
              ref={videoRef}
              audio={false}
              width={"100%"}
              height={300}
              screenshotFormat="image/jpeg"
              screenshotQuality={100}
              minScreenshotWidth={800}
              minScreenshotHeight={600}
              videoConstraints={{
                width: 400,
                height: 300,
                facingMode: "user"
              }}
            />
          </div>
          {template && template.gabarito && template.gabarito !== '' && <div className="absolute w-full h-full opacity-25">
            <Image
              src="/assets/templates/gabarito-1.png"
              fill
              alt="gabarito" 
              style={{
                objectFit: "cover"
              }}
            />
          </div>}
        </div>
        <div className="w-full text-left flex flex-col mt-6">
          <span className="uppercase text-zinc-500 tracking-widest">selecione o seu preferido</span>
          <ul className="my-4 flex gap-4">
            {templates.length>=1 && templates.map((temp:any, k:number) => <li key={k} onClick={() => setTemplate(temp)} className="w-64 h-28 rounded-lg bg-black cursor-pointer relative overflow-hidden">
              <Image
                src={`${temp.bg}`}
                fill
                alt="template" 
                style={{
                  objectFit: "cover"
                }}
              />              
            </li>)}
          </ul>
        </div>
      </div>
      {typeof countdown !== 'number' && <button onClick={() => setCountdown(3)} className="uppercase absolute text-white bg-[#D3303D] text-xl p-3 px-12 shadow-lg hover:shadow-xl -bottom-7 border border-white rounded-lg transition duration-300 ease-in-out font-semibold hover:bg-red-500">
        capturar foto
      </button>}
    </>}
    {processing && <>
      <div className="mt-12 text-zinc-500 tracking-widest flex flex-col justify-center items-center gap-8">
        <div role="status">
          <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        <p className="w-full text-center">processando imagem e<br/>aplicando template...</p>
      </div>
    </>}
    {download && preview && <>
      <div className="pb-12 pt-8 flex flex-col justify-center items-center">
        <div className="relative w-80 h-80">
          {qrCode && <QRCode
            value={qrCode}
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            viewBox={`0 0 256 256`}
          />}
        </div>
        <p className="px-32 font-semibold text-center mt-6 text-xl">
          {campaignData.phrase_download ? campaignData.phrase_download.stringValue : <>
            ✨ Sua foto ficou incrível!<br/>
            Faça o download em minutos escaneando o QR Code acima...
          </>}
        </p>
      </div>
      <button disabled className="uppercase absolute text-white bg-[#D3303D] text-xl p-3 px-12 shadow-lg hover:shadow-xl -bottom-7 border border-white rounded-lg transition duration-300 disabled:cursor-not-allowed disabled:bg-zinc-500 ease-in-out font-semibold hover:bg-red-500">
        redirecionando em 20 segundos...
      </button>
    </>}
    {!download && preview && preview !== "" && <ApprovePictureComponent
      phrase_approve={campaignData.phrase_approve ? campaignData.phrase_approve.stringValue : null}
      phrases_list={phrases}
      preview={preview}
      handleButton={onHandleApproveButton}
    />}
  </>)
} */
}
