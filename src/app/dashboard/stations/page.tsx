'use client';

import { useEffect, useState } from "react";
import { EyeOff, FlipVertical, GalleryHorizontal } from "lucide-react";
import { GetStations } from "@/app/api/services/firebase";
import Link from "next/link";

const projects = [
  { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}


export default function PageStations(){
  const [stations, setStations] = useState<any>([]);

  useEffect(()=>{
    getStations();
  }, []);

  const getStations = async () => {
    try{
      const _stations = await GetStations();
      console.log('getStations', _stations);
      setStations(_stations);
    }catch(err){
      console.log('getStations', err);
    }
  }

  return (<>
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Estações</h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-8">
            * As estações são geolocalizações cadastradas automaticamente<br/>a cada vez que uma campanha é ativada.
          </h2>
          <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-1 sm:gap-6 lg:grid-cols-1">
            {stations.map((project:any) => (
              <li key={project.city} className="col-span-1 flex rounded-md shadow-sm">
                <div
                  className={classNames(
                    'flex w-16 flex-shrink-0 bg-emerald-500 items-center justify-center rounded-l-md text-sm font-medium text-white'
                  )}
                >
                  {project.country_code}
                </div>
                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                  <div className="flex-1 truncate px-4 py-2 text-sm">
                    <p className="font-medium text-gray-900 hover:text-gray-600">
                      {project.city}/{project.state}
                    </p>
                    <p className="text-gray-500">{project.municipality}</p>
                  </div>
                  <div className="flex-shrink-0 pr-2">
                    <Link
                      title="Visitar galeria de capturas da estação"
                      href={`/dashboard/stations/${project.id}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">Open options</span>
                      <GalleryHorizontal className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>    
  </>)
}