import React, { useState, useEffect } from 'react';
import HeaderAdmin from '../Header/HeaderAdmin';
import SidebarAdmin from '../Sidebar/SidebarAdmin';
import AddProduct from './AddProduct';
import './ProductsAdmin.css';
import Loading from '../../../components/Loading/Loading';
import axios from 'axios';
// icon
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

const ProductsAdmin = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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

  // delete product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/v1/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <>
        <HeaderAdmin />
        <main>
          <div className="dashboard-container">
            <SidebarAdmin />
            <Loading />
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <HeaderAdmin />
      <main>
        {show && <AddProduct setShow={setShow} />}
        <div className="dashboard-container">
          <SidebarAdmin />
          <div className="products-admin-container">
            <div className="products-admin-header">
              {/* add product button */}
              <button onClick={() => setShow(true)}>Add Product</button>
              <h3>All Products</h3>
            </div>
            <div className="table-container">
              <div className="table-header">
                <div>ID</div>
                <div>Name</div>
                <div>Price</div>
                <div>Category</div>
                <div>Action</div>
              </div>
              <div className="table-body">
                {products.map((product) => {
                  const { _id: id, name, category, price } = product;
                  return (
                    <div key={id} className="table-row">
                      <div>{id}</div>
                      <div>{name}</div>
                      <div>
                        <span className="peso-sign">&#8369;</span>
                        {price}.00
                      </div>
                      <div>{category}</div>
                      <div>
                        <button className="action-edit-btn">
                          <FaEdit />
                        </button>
                        <button
                          className="action-delete-btn"
                          onClick={() => deleteProduct(id)}
                        >
                          <AiFillDelete />
                        </button>
                      </div>
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
