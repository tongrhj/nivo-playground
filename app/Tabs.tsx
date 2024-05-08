'use client'

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import NivoGraph from './NivoGraph';
import RechartsGraph from './RechartsGraph';
import HighchartsGraph from './HighchartsGraph';
import ChartjsGraph from './ChartjsGraph';
import { Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function Tabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', backgroundColor: 'white', borderRadius: 4 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Line Graph" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <Grid container spacing={2}>
          <Grid xs={12} md={6} lg={4}>
            <Box>
              <Typography variant="h2" gutterBottom>
                <a href="https://nivo.rocks" target='_blank'>Nivo</a>
              </Typography>
              <NivoGraph />
            </Box>
          </Grid>

          <Grid xs={12} md={6} lg={4}>
              <Box>
                <Typography variant="h2" gutterBottom>
                  <a href="https://recharts.org" target='_blank'>Recharts</a>
                </Typography>
                <RechartsGraph />
              </Box>
          </Grid>

          <Grid xs={12} md={6} lg={4}>
            <Box>
              <Typography variant="h2" gutterBottom>
                <a href="https://highcharts.com" target='_blank'>Highcharts</a>
              </Typography>
              <HighchartsGraph />
            </Box>
          </Grid>

          <Grid xs={12} md={6} lg={4}>
            <Box>
              <Typography variant="h2" gutterBottom>
                <a href="https://chartjs.org" target='_blank'>Chart.js</a>
              </Typography>
              <ChartjsGraph />
            </Box>
          </Grid>

          </Grid>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}