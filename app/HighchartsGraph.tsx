import React, { useRef, useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting'

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
}

const points = [
  { x: Date.parse('2024-01-01'), y: 4 },
  { x: Date.parse('2024-01-02'), y: 8 },
  { x: Date.parse('2024-01-03'), y: 0 },
  { x: Date.parse('2024-01-04'), y: 15 },
  { x: Date.parse('2024-01-05'), y: 16 },
  { x: Date.parse('2024-01-06'), y: 23 },
  { x: Date.parse('2024-01-07'), y: 42 },
];

const data: Highcharts.SeriesOptionsType[] = [
  { name: 'advocates', type: 'line', data: points }
];

const HighchartsWrapper = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [chartOptions] = useState<Highcharts.Options>({
    xAxis: {
      type: 'datetime',

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
    <HighchartsWrapper props={{}} />
  )
}