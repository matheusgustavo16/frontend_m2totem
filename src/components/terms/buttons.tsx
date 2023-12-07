'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const ButtonsComponent = ({ slug, isAccept } : { slug:string; isAccept?: boolean; }) => {

  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [older, setOlder] = useState<boolean>(false);
  const [accept, setAccept] = useState<boolean>(false);

  useEffect(()=>{
    if(older && accept) handleRedirect();
  }, [older, accept]);

  useEffect(()=>{
    if(isAccept) handleRedirect();
  }, [isAccept]);

  const handleRedirect = () => {
    setLoading(true);
    toast.success(`redirecionando...`);
    router.push(`/campaign/${slug}/templates`);
    // setLoading(false);
  };

  return <>
    <label className="flex gap-4 items-start">
      <input
        // disabled={isAccept || older}
        disabled={loading}
        checked={isAccept || older}
        onChange={() => setOlder(!older)}
        type="checkbox"
        className="w-16 h-16 -mt-2 text-red-600 bg-gray-200 outline-none border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <p className="text-5xl">Declaro e confirmo que sou maior de idade (18 anos).</p>
    </label>
    <label className="flex gap-4 items-start">
      <input
        disabled={loading || isAccept || accept}
        checked={isAccept || accept}
        onChange={() => setAccept(!accept)}
        type="checkbox"
        className="w-16 h-16 -mt-2 text-red-600 bg-gray-200 outline-none border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <p className="text-5xl">
        Li e concordo com a política de privacidade da Coca-Cola.
        <Link
          href={`/campaign/${slug}/terms?showTermos=true`}
          className="bg-black/30 p-2 px-4 text-xl uppercase tracking-wider inline-block mt-6 hover:bg-black/80 transition duration-300 ease-in-out hover:scale-110"
        >
          ler política de privacidade
        </Link>
      </p>
    </label>
  </>
};