import { GetStatsDashboard } from "@/app/api/services/firebase";
import { Antenna, Camera, Users2 } from "lucide-react";
import Link from "next/link";

const GeneralStats = async() => {
  
  const dashStats:any = await GetStatsDashboard();

  return (<>
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Estatísticas Gerais</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-indigo-500 p-3">
              <Users2 className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">Campanhas Cadastradas</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{dashStats.countCampaigns || 0}</p>
            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <Link href="/dashboard/campaigns" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Gerenciar
                </Link>
              </div>
            </div>
          </dd>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-indigo-500 p-3">
              <Antenna className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">Estações Ativas</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{dashStats.countStations || 0}</p>
            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <Link href="/dashboard/stations" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Gerenciar
                </Link>
              </div>
            </div>
          </dd>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-indigo-500 p-3">
              <Camera className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">Fotos Geradas</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{dashStats.countPictures || 0}</p>
            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <Link href="/dashboard/reports" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Gerenciar
                </Link>
              </div>
            </div>
          </dd>
        </div>

      </dl>
    </div>
  </>)
};

export default GeneralStats;