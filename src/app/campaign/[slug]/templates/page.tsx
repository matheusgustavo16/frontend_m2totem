'use client'

import { useState, useRef, useEffect, useCallback } from "react"
import ApprovePictureComponent from "@/components/approvePicture"
import CountdownComponent from "@/components/countdown"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Webcam from "react-webcam"
import { removeBg } from "@/app/api/services/photo"
import QRCode from "react-qr-code"
import { AddQrPicture, GetCampaign, GetTemplates } from "@/app/api/services/firebase"
import { ref, uploadString } from "firebase/storage"
import { storage } from "@/utils/firebase"
import toast from "react-hot-toast"

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
  };

  useEffect(()=>{
    getTemplates();
  }, [])

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

  const handleUploadFile = async (imageFile: any) => {
    if(imageFile){
      const name = new Date().toISOString();
      const storageRef = ref(storage, `pictures/${name}.jpg`);
      uploadString(storageRef, imageFile, 'data_url')
        .then(async(data:any) => {
          // console.log("uploadString", data);
          const addQr:any = await AddQrPicture({
            createdAt: new Date().toISOString(),
            picture: `https://firebasestorage.googleapis.com/v0/b/m2totem.appspot.com/o/${data.metadata.fullpath}?alt=media`
          });
          if(addQr){
            setQrCode(`${window.location.origin}/campaign/${slug}/download/${addQr}`);
            setDownload(true);
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

  const onHandleApproveButton = async(approved: number) => {
    // clicou na aprovação
    if(approved && preview){
      await handleUploadFile(preview);
      setTimeout(() => {
        router.push(`/campaign/${slug}`);
      }, 20000);
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
      <div className={`w-full text-center py-8 px-12 flex flex-col ${typeof countdown !== 'number' ? `` : `absolute -top-[999%] -left-[999%]`}`}>
        <div className="text-white relative bg-black my-6 min-w-[400px] min-h-[300px] m-auto rounded-xl flex justify-center items-center overflow-hidden">
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
              width={400}
              height={300}
              screenshotFormat="image/jpeg"
              screenshotQuality={100}
              minScreenshotHeight={600}
              minScreenshotWidth={800}
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
      <div className="mt-12 text-zinc-500 tracking-widest">
        processando imagem e aplicando template....
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
      preview={preview}
      handleButton={onHandleApproveButton}
    />}
  </>)
}