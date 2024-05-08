'use client'

import Box from '@mui/material/Box';
import { XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';

const data = [
  { day: '2023-01-01', y: 4 },
  { day: '2024-01-02', y: 8 },
  { day: '2024-01-03', y: 0 },
  { day: '2024-01-04', y: 15 },
  { day: '2024-01-05', y: 16 },
  { day: '2024-01-06', y: 23 },
  { day: '2024-01-07', y: 42 },
];

const dateFormatter = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function RechartsGraph() {
  return <Box height={300}><ResponsiveContainer width="100%" height="100%">
  <LineChart
    data={data}
    margin={{
    }}
  >
    <CartesianGrid vertical={false} />
    <XAxis tickFormatter={dateFormatter} dataKey="day" />
    <YAxis tickLine={false} axisLine={false} tickMargin={8} tick={{ fontSize: 14 }}/>
    <Tooltip />
    <Line type="monotone" dataKey="y" dot={false} strokeWidth={3} />
  </LineChart>
</ResponsiveContainer></Box>
}