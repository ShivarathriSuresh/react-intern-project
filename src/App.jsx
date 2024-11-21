
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { processFile } from './utils/aiProcessor';
import { setInvoices, setProducts, setCustomers } from './slices/dataSlice';

import FileUpload from './components/fileupload';
import Invoices from './components/invoices';
import Products from './components/products';
import Customers from './components/customers';

const App = () => {
  const dispatch = useDispatch();

  
  const handleFileUpload = async (file) => {
    try {
      const extractedData = await processFile(file);

      
      dispatch(setInvoices(extractedData.invoices || []));
      dispatch(setProducts(extractedData.products || []));
      dispatch(setCustomers(extractedData.customers || []));
    } catch (error) {
      alert('Error processing file. Please try again.');
    }
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0, gap: '20px' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/invoices">Invoices</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/customers">Customers</Link></li>
          </ul>
        </nav>

        {/* File Upload Section */}
        <div style={{ margin: '20px 0' }}>
          <h2>Upload a File</h2>
          <FileUpload onFileUpload={handleFileUpload} />
        </div>

        {/* Tab Routes */}
        <Routes>
          <Route path="/" element={<h2>Welcome to React AI Project</h2>} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


