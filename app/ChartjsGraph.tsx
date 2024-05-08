'use client'

import { Line } from 'react-chartjs-2';

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Box from '@mui/material/Box';
import { fillMissingDays, mockData } from './utils';

Chart.register(CategoryScale);

const dateFormatter = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

const points = fillMissingDays(mockData)

export default function ChartjsGraph() {
  return (<Box height={300}>
    <Line data={{
      labels: points.map(x => x.x),
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
          labels: points.map(p => dateFormatter(p.x)),
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
  /></Box>
  );
}