import React, { useRef, useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting'
import Box from '@mui/material/Box';
import { fillMissingDays, mockData } from './utils';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
}

const points = fillMissingDays(mockData).map(({ x, y }) => ({ x: Date.parse(x), y }))

const data: Highcharts.SeriesOptionsType[] = [
  {
    name: 'y',
    type: 'spline',
    marker: {
      enabled: false
    },
    data: points,
  }
];

const HighchartsWrapper = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [chartOptions] = useState<Highcharts.Options>({
    title: {
      text: undefined
    },

    credits: {
      enabled: false
    },

    navigation: {
      buttonOptions: {
        enabled: false
      }
    },

    xAxis: {
      type: 'datetime',
      title: undefined,
    },

    yAxis: {
      title: undefined,
    },

    legend: {
      enabled: false
    },

    series: data
  });

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
      ref={chartComponentRef}
      {...props}
    />
  );
};


export default function HighchartsGraph() {
  return (
    <Box minHeight={300}>
      <HighchartsWrapper props={{}} />
    </Box>
  )
}