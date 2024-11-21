

import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Invoices from "./invoices";
import Products from "./products";
import Customers from "./customers";

const AppTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Invoices" />
        <Tab label="Products" />
        <Tab label="Customers" />
      </Tabs>
      {value === 0 && <Invoices />}
      {value === 1 && <Products />}
      {value === 2 && <Customers />}
    </Box>
  );
};

export default AppTabs;
