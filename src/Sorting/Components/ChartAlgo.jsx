import {
   CategoryScale,
   Chart as ChartJS,
   Legend,
   LinearScale,
   LineElement,
   PointElement,
   Title,
   Tooltip,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { calculate } from '../../utils/calculator';

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

export default function ChartAlgo({ data, type, level }) {
   const options = {
      responsive: true,
      plugins: {
         legend: {
            display: 'bottom',
         },
         title: {
            display: 'top',
            text: `Line Chart for ${level}.`,
         },
      },
   };
   const { labels, claculatedData } = calculate(data, type, level);

   let radious = claculatedData.length >= 20 ? 0 : 3;

   const chartData = {
      labels,
      datasets: [
         {
            label: 'Nataion O',
            Title: '',
            data: claculatedData,
            borderColor: '#eb5d1e',
            backgroundColor: '#dfa085',
            pointRadius: radious,
         },
      ],
   };
   return <Line options={options} data={chartData} />;
}
