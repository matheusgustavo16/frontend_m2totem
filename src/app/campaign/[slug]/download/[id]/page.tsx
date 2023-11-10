import Image from "next/image";

export default function PageDownload(){
  return (<>
    <div className="pb-12 pt-8 flex flex-col justify-center items-center">
      <div className="relative w-80 h-80 blur-lg">
        <Image src="/assets/sample-qrcode.jpg" fill alt="qr code" />
      </div>
      <p className="px-32 font-semibold text-center mt-6 text-xl">
        ✨ Sua foto ficou incrível!<br/>
        Faça o download em minutos escaneando o QR Code acima...
      </p>
    </div>
    <button disabled className="uppercase absolute text-white bg-[#D3303D] text-xl p-3 px-12 shadow-lg hover:shadow-xl -bottom-7 border border-white rounded-lg transition duration-300 disabled:cursor-not-allowed disabled:bg-zinc-500 ease-in-out font-semibold hover:bg-red-500">
      redirecionando em 20 segundos...
    </button>
  </>)
};