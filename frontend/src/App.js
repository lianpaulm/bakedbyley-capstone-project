import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// client route
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Carts from './pages/Carts/Carts';
import ErrorPage from './pages/ErrorPage/ErrorPage';

// Admin route
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import ProductsAdmin from './pages/Admin/ProductsAdmin/ProductsAdmin';
import Orders from './pages/Admin/Orders/Orders';
import Users from './pages/Admin/Users/Users';
import AdminErrorPage from './pages/ErrorPage/AdminErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/cart/:id" element={<Carts />}></Route>
        <Route path="/cart/" element={<Carts />}></Route>
        <Route
          path="/products/featured/:id"
          element={<ProductDetails />}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>

        {/* admin path */}
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/products" element={<ProductsAdmin />}></Route>
        <Route path="/admin/orders" element={<Orders />}></Route>
        <Route path="/admin/users" element={<Users />}></Route>
        <Route path="/admin/*" element={<AdminErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
