'use client';

import { AddCampaign } from "@/app/api/services/firebase";
import { storage } from "@/utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Users, Camera } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PageCampaigns(){

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
  };

  const handleAddCampaign = async () => {
    try{
      const dataAddCampaign:any = await AddCampaign({ ...form, createdAt: new Date().toISOString() });
      console.log('handleAddCampaign', dataAddCampaign);
      // redirect(`/dashboard/campaign/${dataAddCampaign.id}`);
      router.push(`/dashboard/campaigns/${dataAddCampaign}`);
    }catch(err){
      console.log('handleAddCampaignerror', err);
    }
  };
  
  return (<>
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Adicionar Campanha</h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Nova Campanha</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Cada campanha pode ser personalizada com imagens, cores e textos e
                templates configuráveis.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                
                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Título da Campanha
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      onChange={onFormChange}
                      value={form.title}
                      name="title"
                      className="block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Cliente
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      onChange={onFormChange}
                      value={form.client}
                      name="client"
                      className="block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Email do Cliente
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      onChange={onFormChange}
                      value={form.client_email}
                      name="client_email"
                      className="block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Logo da Campanha
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    {!form.logo || form.logo === '' ? <Users className="h-12 w-12 text-gray-300" aria-hidden="true" />
                    : <Image src={form.logo} width={85} height={85} alt={`logo campaign picture`} className="rounded-lg" />}
                    <input
                      type="file"
                      onChange={(files) => handleSelectedFile('logo', files.target.files)}
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Background
                  </label>
                  <div style={form.background && form.background !== '' ? {
                    backgroundImage: `url('${form.background}')`
                  } : {}} className={`mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-contain`}>
                    <div className={`text-center ${form.background && form.background !== '' ? `bg-white p-4 rounded-lg` : ``}`}>
                      <Camera className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Selecionar arquivo</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={(files) => handleSelectedFile('background', files.target.files)}
                          />
                        </label>
                        <p className="pl-1">ou clique e arraste pra cá</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Textos e Frases</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    [HOME] Frase 1
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      onChange={onFormChange}
                      value={form.phrase_1}
                      name="phrase_1"
                      className="block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    [HOME] Frase 2
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      onChange={onFormChange}
                      value={form.phrase_2}
                      name="phrase_2"
                      className="block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    [APROVAÇÃO] Frase Página de Aprovação
                  </label>
                  <div className="mt-2">
                    <input
                      id="text"
                      onChange={onFormChange}
                      value={form.phrase_approve}
                      name="phrase_approve"
                      className="block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    [DOWNLOAD] Frase Página de Download
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      onChange={onFormChange}
                      value={form.phrase_download}
                      name="phrase_download"
                      className="block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

               
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button className="text-sm font-semibold leading-6 text-gray-900">
              Cancelar
            </button>
            <button
              onClick={() => handleAddCampaign()}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Adicionar Campanha
            </button>
          </div>
        </div>
      </div>
    </main>
  </>)
}