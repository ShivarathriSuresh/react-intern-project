
import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';

const Customers = () => {
  const customers = useSelector((state) => state.data.customers);

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
      <h2>Customers</h2>
      <DataGrid rows={customers} columns={columns} pageSize={5} />
    </div>
  );
};

export default Customers;