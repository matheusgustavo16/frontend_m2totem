import Image from "next/image";

export default function ApprovePictureComponent({
  phrase_approve,
  preview,
  handleButton
}: {
  phrase_approve: string;
  preview?: any;
  handleButton: (liked: number) => void;
}){
  return (<>
    <div className="flex flex-col justify-center items-center">
      <div className="text-white my-6 relative bg-black/90 min-w-[500px] min-h-[330px] m-auto rounded-lg flex justify-center items-center overflow-hidden">
        {preview && <Image src={preview} fill alt="preview picture" />}
      </div>
      <div className="px-16 mb-8 text-center font-semibold text-xl">{phrase_approve ? phrase_approve : `Aqui está sua foto! Você pode refazê-la se quiser, ou clique em GOSTEI! para liberar o download.`}</div>
      <div className="flex gap-4 mb-8">
        <button className="bg-green-600 text-white rounded-full p-2 text-base font-semibold uppercase px-12" onClick={() => handleButton(1)}>gostei!</button>
        <button className="bg-red-500 text-white rounded-full p-2 text-base font-semibold uppercase px-12" onClick={() => handleButton(0)}>quero refazer</button>
      </div>
    </div>
  </>)
};