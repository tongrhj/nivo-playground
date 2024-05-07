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

export default function Tabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Line Graph" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Stack>
            <Box>
              <Typography variant="h2" gutterBottom>
                <a href="https://nivo.rocks" target='_blank'>Nivo</a>
              </Typography>
              <NivoGraph />
            </Box>

            <Box>
              <Typography variant="h2" gutterBottom>
                <a href="https://recharts.org" target='_blank'>Recharts</a>
              </Typography>
              <RechartsGraph />
            </Box>

            <Box>
              <Typography variant="h2" gutterBottom>
                <a href="https://highcharts.com" target='_blank'>Highcharts</a>
              </Typography>
              <Box height={300}>
                <HighchartsGraph />
              </Box>
            </Box>

          </Stack>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}