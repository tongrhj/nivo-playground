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
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'my x axis legend',
              legendOffset: 36,
              legendPosition: 'middle',
              truncateTickAt: 0
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'my y axis legend',
              legendOffset: -40,
              legendPosition: 'middle',
              truncateTickAt: 0
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
            data={data}
            enableArea
          /></Box>
}