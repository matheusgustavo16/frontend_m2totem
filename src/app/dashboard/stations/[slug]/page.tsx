import { GetStation, GetStationPictures } from "@/app/api/services/firebase";
import { CalendarCheck, Flag, Map, Pin } from "lucide-react";

type PageProps = {
  params: {
    slug: string
  }
};

export default async function PageCampaignSlug({ params: { slug } }: PageProps){

  const list:any = await GetStationPictures(slug);
  const stationData:any = await GetStation(slug);

  return (<>
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Estação #{slug}</h1>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Pin className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            {stationData.city.stringValue}/{stationData.state.stringValue}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Flag className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            {stationData.country.stringValue}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Map className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            {stationData.municipality.stringValue}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarCheck className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Ativa em {new Date(stationData.createdAt.stringValue).toLocaleString('pt-br')}
          </div>
        </div>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-8">
            * Exibindo {list.length} foto(s) capturada(s) na estação atual.
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {list && list.map((pic: any, k:number) => <div key={k}>
                  <img className="h-auto max-w-full rounded-lg" src={pic.picture} alt="" />
              </div>)}
          </div>

        </div>
      </div>
    </main>    
  </>)
}