'use client';

import { DeleteCampaign, GetCampaign } from "@/app/api/services/firebase";
import { storage } from "@/utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Users, Camera } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type PageProps = {
  params: {
    id: string
  }
}

export default function PageCampaigns({ params: { id } }: PageProps){

  const router = useRouter();
  const [imageFile, setImageFile] = useState<File|null>(null);
  const [bgFile, setBgFile] = useState<File|null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progressUpload, setProgressUpload] = useState(0);

  const [form, setForm] = useState({
    title: '',
    client: '',
    client_email: '',
    logo: '',
    background: '',
    phrase_1: '',
    phrase_2: '',
    phrase_approve: '',
    phrase_download: ''
  });

  useEffect(()=>{
    if(id){
      GetCampaignData();
    }
  }, [id]);

  const GetCampaignData = async () => {
    try{
      const getData = await GetCampaign(id);
      console.log('GetCampaignData', getData);
      setForm({
        ...form,
        title: getData.title && getData.title.stringValue||"",
        client: getData.client && getData.client.stringValue||"",
        client_email: getData.client_email && getData.client_email.stringValue||"",
        logo: getData.logo && getData.logo.stringValue||"",
        background: getData.background && getData.background.stringValue||"",
        phrase_1: getData.phrase_1 && getData.phrase_1.stringValue||"",
        phrase_2: getData.phrase_2 && getData.phrase_2.stringValue||"",
        phrase_approve: getData.phrase_approve && getData.phrase_approve.stringValue||"",
        phrase_download: getData.phrase_download && getData.phrase_download.stringValue||""
      })
    }catch(err){
      console.log('GetCampaignDataError', err);
    }
  };

  const handleSelectedFile = (form_field: string, files: any) => {
    if (files && files[0].size < 10000000) {
      if(form_field === 'logo'){
        setImageFile(files[0]);
      }else{
        setBgFile(files[0]);
      }
      handleUploadFile(files[0], form_field);
      console.log(files[0]);
    } else {
      // message.error('File size to large')
    }
  };

  const onFormChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleUploadFile = async (imageFile: any, form_field: string) => {
    if(imageFile){
      const name = imageFile.name;
      const storageRef = ref(storage, `campaigns/${new Date().getTime()}_${name}`);
      const uploadImage = uploadBytesResumable(storageRef, imageFile);
      uploadImage.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgressUpload(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          console.log('handleUploadFileError', error);
        },
        () => {
          getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            if(form_field === 'logo'){
              setForm({ ...form, logo: url });
            }else{
              setForm({ ...form, background: url });
            }
          })
        },
      )
    }else{
      console.log('Selecione arquivo valido')
    }
  }

  const handleDeleteCampaign = async () => {
    try{
      const dataAddCampaign:any = await DeleteCampaign(id);
      console.log('handleDeleteCampaign', dataAddCampaign);
      router.push(`/dashboard/campaigns?unix=${new Date().toISOString()}`);
    }catch(err){
      console.log('handleDeleteCampaignError', err);
    }
  };
  
  return (<>
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Excluir Campanha</h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Campanha: {form.title}</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Cada campanha pode ser personalizada com imagens, cores e textos e
                templates configuráveis.
              </p>

              <div className="mt-14 gap-x-6 gap-y-8 sm:grid-cols-6 text-center">
                {form.logo && form.logo !== '' && <Image src={form.logo} width={120} height={120} alt="Logo da campanha" className="m-auto rounded-xl mb-6 shadow-xl" />}
                <p className="text-zinc-600 tracking-widest">#{id}</p>
                <h2 className="text-2xl text-zinc-800 font-bold mb-4">{form.title}</h2>
                <p className="text-zinc-500">Cliente: {form.client && form.client !== '' ? form.client : `Não identificado`}</p>
                <p className="text-zinc-500">Cliente Email: {form.client_email && form.client_email !== '' ? form.client_email : `Não identificado`}</p>                
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={() => handleDeleteCampaign()}
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Excluir Campanha Permanentemente
            </button>
          </div>
        </div>
      </div>
    </main>
  </>)
}