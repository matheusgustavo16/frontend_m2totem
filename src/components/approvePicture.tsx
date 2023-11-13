'use client';

import Image from "next/image";
import { useState } from "react";

export default function ApprovePictureComponent({
  phrase_approve,
  phrases_list,
  preview,
  handleButton
}: {
  phrase_approve: string;
  phrases_list?: any;
  preview?: any;
  handleButton: (liked: number, phrase?: string|null) => void;
}){
  const [phrase, setPhrase] = useState(null);
  return (<>
    <div className="flex flex-col justify-center items-center">
      <div className="text-white my-6 relative bg-black/90 min-w-[600px] min-h-[360px] m-auto rounded-lg flex justify-center items-center overflow-hidden">
        {preview && <Image src={preview} fill alt="preview picture" />}
        {phrase && <Image src={phrase} fill alt="phrase picture"  className="absolute"/>}
      </div>
      <div className="px-16 mb-8 text-center font-semibold text-xl">{phrase_approve ? phrase_approve : `Aqui está sua foto! Você pode refazê-la se quiser, ou clique em GOSTEI! para liberar o download.`}</div>
      <div className="w-full text-left flex flex-col mt-6 px-2">
        <span className="uppercase text-zinc-500 tracking-widest">selecione a frase</span>
        <ul className="my-4 flex gap-4">
          {phrases_list.map((temp:any, k:number) => <li key={k} onClick={() => setPhrase(temp.phrase)} className={`w-64 h-28 rounded-lg bg-black/10 ${phrase === temp.phrase ? `border-4 border-zinc-600` : ``} cursor-pointer relative overflow-hidden`}>
            <Image
              src={`${temp.phrase}`}
              fill
              alt="phrase" 
              style={{
                objectFit: "cover"
              }}
            />              
          </li>)}
        </ul>
      </div>
      <div className="flex gap-4 my-8 mb-4">
        <button disabled={!phrase} className="bg-green-600 text-white rounded-full p-2 text-base font-semibold uppercase px-12 disabled:cursor-not-allowed disabled:opacity-25" onClick={() => handleButton(1, phrase)}>aplicar frase!</button>
        <button className="bg-red-500 text-white rounded-full p-2 text-base font-semibold uppercase px-12" onClick={() => handleButton(0)}>refazer foto</button>
      </div>
    </div>
  </>)
};