import React, { useState, useEffect } from 'react';
import HeaderAdmin from '../Header/HeaderAdmin';
import SidebarAdmin from '../Sidebar/SidebarAdmin';
import './ProductsAdmin.css';
import Loading from '../../../components/Loading/Loading';
import axios from 'axios';

const ProductsAdmin = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('/api/v1/admin/products');
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        <HeaderAdmin />
        <main>
          <Loading />
        </main>
      </>
    );
  }

  return (
    <>
      <HeaderAdmin />
      <main>
        <div className="dashboard-container">
          <SidebarAdmin />
          <div className="products-admin-container">
            <div className="table-container">
              <div className="table-header">
                <div>ID</div>
                <div>Name</div>
                <div>Price</div>
                <div>Category</div>
              </div>
              <div className="table-body">
                {products.map((product) => {
                  const { _id: id, name, category, price } = product;
                  return (
                    <div key={id} className="table-row">
                      <div>{id}</div>
                      <div>{name}</div>
                      <div>{price}</div>
                      <div>{category}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductsAdmin;
