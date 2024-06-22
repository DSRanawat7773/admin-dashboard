import React from 'react';
import { Box, Typography } from '@mui/material';
import BasicTable from '../components/Table';
// import BasicTable from '../components/table';
import Chart from '../components/Chart';
import Calendar from '../components/Calendar';
import Kanban from '../components/Kanban';

const Dashboard = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Box mb={3}>
        <BasicTable />
      </Box>
      <Box mb={3}>
        <Chart />
      </Box>
      <Box mb={3}>
        <Calendar />
      </Box>
      <Box>
        <Kanban />
      </Box>
    </Box>
  );
}

export default Dashboard;
