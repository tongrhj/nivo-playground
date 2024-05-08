import Box from "@mui/material/Box";
import { ResponsiveLine } from "@nivo/line";
import { fillMissingDays, mockData } from "./utils";

const data = [
  {
    id: 'Advocates',
    data: fillMissingDays(mockData)
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