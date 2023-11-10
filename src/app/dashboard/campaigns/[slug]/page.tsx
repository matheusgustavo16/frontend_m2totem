'use client';

import { useEffect, useState } from "react";
import { storage } from "@/utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Trash2, Users } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { AddTemplate, DeleteTemplate, GetTemplates } from "@/app/api/services/firebase";

type PageProps = {
  params: {
    slug: string
  }
}

export default function PageCampaignSlug({ params: { slug } }: PageProps){

  const [templates, setTemplates] = useState<any>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [progressUpload, setProgressUpload] = useState(0);

  const [form, setForm] = useState({
    bg: '',
    gabarito: ''
  });

  useEffect(()=>{
    if(!templates || templates.length <= 0){
      getTemplates();
    }
  }, [])

  const getTemplates = async() => {
    try{
      const templates = await GetTemplates(slug);
      // console.log('getTemplates', templates);
      setTemplates(templates);
    }catch(erR){
      setTemplates([]);
      console.log('getTemplatesError', erR);
    }
  }

  const handleSelectedFile = (form_field: string, files: any) => {
    if (files && files[0] && files[0].size < 10000000) {
      handleUploadFile(files[0], form_field);
      console.log(files[0]);
    } else {
      toast.error(`Erro ao fzer o upload do template.`)
    }
  };

  const handleUploadFile = async (imageFile: any, form_field: string) => {
    if(imageFile){
      const name = imageFile.name;
      const storageRef = ref(storage, `templates/${new Date().getTime()}_${name}`);
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
              setIsUploading(true);
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          console.log('handleUploadFileError', error);
        },
        () => {
          getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            setIsUploading(false);
            if(form_field === 'bg'){
              setForm({ ...form, bg: url });
            }else{
              setForm({ ...form, gabarito: url });
            }
          })
        },
      )
    }else{
      setIsUploading(false);
      console.log('Selecione arquivo valido')
    }
  };

  const handleAddTemplate = async () => {
    try{
      const dataAddTemplate:any = await AddTemplate({ ...form, campaign_id: slug, createdAt: new Date().toISOString() });
      console.log('handleAddTemplate', dataAddTemplate);
      setForm({
        ...form,
        bg: '',
        gabarito: ''
      });
      await getTemplates();
    }catch(err){
      console.log('handleAddTemplateError', err);
    }
  };

  const handleDeleteTemplate = async (templateId: string) => {
    try{
      await DeleteTemplate(templateId);
      await getTemplates();
    }catch(err){
      console.log('handleDeleteTemplateError', err);
    }
  }
  
  return (<>
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Templates da Campanha</h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {/* ADD TEMPLATES */}
        <div>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Novo Template</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Envie a imagem de background e a imagem de gabarito.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="col-span-3">
                  <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Imagem de Fundo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    {
                      isUploading ? <div role="status">
                          <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          <span className="sr-only">Loading...</span>
                      </div> :
                      (!form.bg || form.bg === '' ?
                        <Users className="h-12 w-12 text-gray-300" aria-hidden="true" />
                        : <Image src={form.bg} width={190} height={90} alt={`logo campaign picture`} className="rounded-lg shadow-xl" />
                      )}
                    <input
                      type="file"
                      onChange={(files) => handleSelectedFile('bg', files.target.files)}
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    />
                  </div>
                </div>

                <div className="col-span-3">
                  <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Gabarito
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    {
                      isUploading ? <div role="status">
                          <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          <span className="sr-only">Loading...</span>
                      </div> :
                      (!form.gabarito || form.gabarito === '' ?
                        <Users className="h-12 w-12 text-gray-300" aria-hidden="true" />
                        : <Image src={form.gabarito} width={190} height={90} alt={`gabarito`} className="rounded-lg shadow-xl" />
                      )}
                    <input
                      type="file"
                      onChange={(files) => handleSelectedFile('gabarito', files.target.files)}
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={handleAddTemplate}
              disabled={form.bg === "" && form.gabarito === ""}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-25"
            >
              Adicionar Template
            </button>
          </div>
        </div>
        {/* LIST TEMPLATES */}
        {(form.bg === "" && form.gabarito === "") && <>
          <div>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Templates Cadastrados</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Envie a imagem de background e a imagem de gabarito.
                </p>

                {templates.length <=0 && <>
                  <div className="text-center mt-12">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        vectorEffect="non-scaling-stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                      />
                    </svg>
                    <h3 className="mt-2 text-sm font-semibold text-gray-900">Sem Templates</h3>
                    <p className="mt-1 text-sm text-gray-500">Adicione o primeiro template à sua campanha no formulário acima.</p>
                  </div>
                </>}

                {templates.length >=1 && <ul role="list" className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                  {templates.map((file:any, k:number) => (
                    <li key={k} className="relative">
                      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img src={file.bg} alt="" className="pointer-events-none object-cover group-hover:opacity-100" />
                        {file.gabarito !== "" && <img src={file.gabarito} alt="" className="pointer-events-none object-cover group-hover:opacity-50" />}
                        <button type="button" className="absolute inset-0 focus:outline-none">
                          <span className="sr-only">View details for {file.title}</span>
                        </button>
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <div className="">
                          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.gabarito !== "" ? `TEM GABARITO` : `SEM GABARITO`}</p>
                          <p className="pointer-events-none block text-sm font-medium text-gray-500">{new Date(file.createdAt).toLocaleString('pt-br')}</p>
                        </div>
                        <button onClick={() => handleDeleteTemplate(file.id)} className="pt-2 cursor-pointer">
                          <Trash2 size={19} className="text-red-600  hover:text-red-700 transition duration-300 ease-in-out" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>}

              </div>
            </div>
          </div>
        </>}
      </div>
    </main>
  </>)
};