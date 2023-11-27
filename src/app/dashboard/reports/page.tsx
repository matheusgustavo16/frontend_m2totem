'use client';

import { useEffect, useState } from "react";
import { Antenna, Calendar, Camera, Download, Filter, Users2 } from "lucide-react";
import Link from "next/link";
import HourFlow from "@/components/dashboard/hourFlow";
import { GetCampaigns, GetReportsByDate } from "@/app/api/services/firebase";

export default function PageCampaigns(){

  const [stats, setStats] = useState<any>({});
  const [campaigns, setCampaigns] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [date, setDate] = useState<string|null>(null);

  const getReportDate = async (date: string, campaignFilter: string|null) => {
    try{
      setLoading(true);
      const _reports = await GetReportsByDate(date, campaignFilter);
      // console.log('getReportDate', _reports);
      setStats(_reports);
    }catch(err){
      console.log('getReportDateError', err);
      setStats(null);
    }finally{
      setLoading(false);
    }
  };

  const getCampaigns = async() => {
    try{
      const _camps = await GetCampaigns();
      // console.log('getCampaigns', _camps);
      setCampaigns(_camps);
    }catch(err){
      console.log('getCampaignsError', err);
    }
  };

  useEffect(()=>{
    if(!campaigns)
    getCampaigns();
  }, []);

  useEffect(() => {
    if(date)
    getReportDate(date, null);
  }, [date]);

  const handleFilterCampaign = async (campaignId: any) => {
    if(date)
      await getReportDate(date, campaignId);
  }

  return (<>
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Relatórios</h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        
        <div className="flex items-center mb-4">
          <span className="mr-4 text-gray-400 select-none">Relatórios do dia:</span>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <input
              name="start"
              value={date||``}
              onChange={(e) => setDate(e.target.value)}
              min={`2023-11-01`}
              max={new Date().toLocaleDateString('sv-sv')}
              type="date"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date start"
            />
          </div>
          {date && <>
            <span className="mx-4 text-gray-400 select-none">Filtrar por campanha</span>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <select
                placeholder="Filtrar por campanha"
                onChange={(e) => handleFilterCampaign(e.target.value)}
                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value={``}>Incluir todas no relatório</option>
                {campaigns.map((camp:any, k:number) => <option key={k} value={camp.id}>[{camp.client}] {camp.title}</option>)}
              </select>
            </div>
          </>}
        </div>

        {loading && <div className="text-center my-12">
          carregando...
        </div>}
        {!date && <div className="text-center mt-12">
          <Calendar className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">Selecione uma data</h3>
          <p className="mt-1 text-sm text-gray-500">E aqui serão exibidos os dados da data selecionada.</p>
        </div>}
        {date && stats && <>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2">

            <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-6 pt-5 shadow sm:px-6 sm:pt-6">
              <dt>
                <div className="absolute rounded-md bg-indigo-500 p-3">
                  <Camera className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">Fotos Capturadas</p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stats.countPictures || 0}</p>
              </dd>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-6 pt-5 shadow sm:px-6 sm:pt-6">
              <dt>
                <div className="absolute rounded-md bg-indigo-500 p-3">
                  <Download className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">Fotos Baixadas</p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stats.countDownloads || 0}</p>
              </dd>
            </div>

          </dl>
          <h3 className="text-base font-semibold leading-6 text-gray-900 mt-12">Fluxo por Horário</h3>
          <HourFlow flow={stats.hourFlow} />
        </>}

      </div>
    </main>    
  </>)
}