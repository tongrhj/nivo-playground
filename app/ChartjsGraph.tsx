'use client'

import { Line } from 'react-chartjs-2';

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

const points = [
  { day: '2023-01-01', y: 4 },
  { day: '2024-01-02', y: 8 },
  { day: '2024-01-03', y: 0 },
  { day: '2024-01-04', y: 15 },
  { day: '2024-01-05', y: 16 },
  { day: '2024-01-06', y: 23 },
  { day: '2024-01-07', y: 42 },
];

Chart.register(CategoryScale);

const dateFormatter = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function ChartjsGraph() {
  return (
    <Line data={{
      labels: points.map(x => x.day),
      datasets: [
        {
          label: '',
          data: points.map(x => x.y),
          cubicInterpolationMode: 'monotone',
        }
      ]
    }}
    options={{
      elements: {
        point: {
          radius: 1,
          hitRadius: 12,
          hoverRadius: 4,
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      },
      scales: {
        x: {
          type: 'category',
          labels: points.map(x => dateFormatter(x.day)),
          grid: {
            drawTicks: true,
            display: false,
          },
        },
        y: {
          grid: {
            drawTicks: false,
          },
          border: {
            display: false,
          },
          ticks: {
            maxTicksLimit: 5,
          },
        }
      }
    }}
  />
  );
}