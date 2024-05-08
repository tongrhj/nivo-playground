'use client'

import Box from '@mui/material/Box';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import { dateFormatter, fillMissingDays, mockData } from './utils';

const data = fillMissingDays(mockData)

export default function RechartsGraph() {
  return <Box height={300}><ResponsiveContainer width="100%" height="100%">
  <LineChart
    data={data}
  >
    <CartesianGrid vertical={false} />
    <XAxis tickFormatter={dateFormatter} dataKey="x" />
    <YAxis tickLine={false} axisLine={false} tickMargin={8} tick={{ fontSize: 14 }}/>
    <Tooltip />
    <Line type="monotone" dataKey="y" dot={false} strokeWidth={3} />
  </LineChart>
</ResponsiveContainer></Box>
}