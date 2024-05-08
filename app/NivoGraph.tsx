import Box from "@mui/material/Box";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: 'Advocates',
    data: [
      { x: '2024-01-01', y: 4 },
      { x: '2024-01-02', y: 8 },
      { x: '2024-01-03', y: 0 },
      { x: '2024-01-04', y: 15 },
      { x: '2024-01-05', y: 16 },
      { x: '2024-01-06', y: 23 },
      { x: '2024-01-07', y: 42 },
    ]
  },
];

export default function NivoGraph() {
  /*
    // make sure parent container have a defined height when using
    // responsive component, otherwise height will be 0 and
    // no chart will be rendered.
  */
  return <Box height={300}><ResponsiveLine
    colors={[
      '#028ee6'
    ]}
    enableGridX={false}
    xScale={{
      format: '%Y-%m-%d',
      precision: 'day',
      type: 'time',
      useUTC: false
    }}
    xFormat="time:%Y-%m-%d"
    yScale={{
      type: 'linear',
      max: Math.max(...data[0].data.map((x) => x.y)) * 1.2,
    }}
    axisBottom={{
      format: '%b %d',
      legendOffset: -12,
      tickValues: 'every day'
    }}
    axisLeft={{
      tickSize: 0,
      tickPadding: 12,
      legendOffset: 12,
      tickValues: 4,
    }}
    gridYValues={4}
    curve="monotoneX"
    useMesh
    animate
    data={data}
    margin={{
      bottom: 60,
      left: 80,
      right: 20,
      top: 20
    }}
    enableCrosshair={false}
    enableTouchCrosshair={false}
    enablePoints
  /></Box>
}