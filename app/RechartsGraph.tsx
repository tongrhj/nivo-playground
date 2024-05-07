'use client'

import Box from '@mui/material/Box';
import { XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { day: '2024-01-01', y: 4 },
  { day: '2024-01-02', y: 8 },
  { day: '2024-01-03', y: 0 },
  { day: '2024-01-04', y: 15 },
  { day: '2024-01-05', y: 16 },
  { day: '2024-01-06', y: 23 },
  { day: '2024-01-07', y: 42 },
];

export default function RechartsGraph() {
  return <Box height={300}><ResponsiveContainer width="100%" height="100%">
  <AreaChart
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <XAxis dataKey="day" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Area dataKey="y" activeDot={{ r: 8 }} />
  </AreaChart>
</ResponsiveContainer></Box>
}