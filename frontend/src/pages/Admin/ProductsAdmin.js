import React from 'react';
import HeaderAdmin from './Header/HeaderAdmin';
import SidebarAdmin from './Sidebar/SidebarAdmin';

const ProductsAdmin = () => {
  return (
    <>
      <HeaderAdmin />
      <main>
        <div className="dashboard-container">
          <SidebarAdmin />
          <div className="new-product-container">
            <h2>products</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductsAdmin;
