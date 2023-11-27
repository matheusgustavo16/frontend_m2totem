'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function HourFlow({ flow }: {
  flow: any;
}){

  const [chartData, setChartData] = useState<any>({
    labels: [      
      '00:00',
      '01:00',
      '02:00',
      '03:00',
      '04:00',
      '05:00',
      '06:00',
      '07:00',
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
      '23:00'
    ],
    datasets: []
  });
  const [chartOptions, setChartOptions] = useState<any>({});

  useEffect(()=>{
    setChartOptions({
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Fluxo de Fotos Capturadas por Horário"
        }
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  useEffect(()=>{
    if(flow)
      setChartData({
        ...chartData,
        datasets: [
          {
            label: "Fotos Capturadas",
            data: flow,
            borderColor: "rgba(99,102,241,1)",
            backgroundColor: "rgba(99,102,241,1)"
          }
        ]
      });
  }, [flow])

  return (<>
    <div className="w-full min-h-[440px] relative pb-24">
      <Bar data={chartData} options={chartOptions} />
    </div>
  </>)
};