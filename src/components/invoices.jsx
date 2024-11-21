

import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';

const Invoices = () => {
  const invoices = useSelector((state) => state.data.invoices);

  const columns = [
    { field: 'serial', headerName: 'Serial Number', width: 150 },
    { field: 'customer', headerName: 'Customer Name', width: 200 },
    { field: 'product', headerName: 'Product Name', width: 200 },
    { field: 'quantity', headerName: 'Quantity', width: 150 },
    { field: 'tax', headerName: 'Tax', width: 100 },
    { field: 'total', headerName: 'Total Amount', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Invoices</h2>
      <DataGrid rows={invoices} columns={columns} pageSize={5} />
    </div>
  );
};

export default Invoices;

