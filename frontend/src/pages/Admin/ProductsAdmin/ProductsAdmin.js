import React, { useState, useEffect } from 'react';
// styles
import './ProductsAdmin.css';
// icons
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
// components
import Loading from '../../../components/Loading/Loading';
import Alert from '../../../components/Alert/Alert';
// pages
import HeaderAdmin from '../Header/HeaderAdmin';
import SidebarAdmin from '../Sidebar/SidebarAdmin';
import AddProduct from './AddProduct';
// axios
import axios from 'axios';

const ProductsAdmin = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('/api/v1/admin/products');
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  // delete product
  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/v1/products/${id}`);
      setLoading(false);
      showAlert(true, 'danger', 'product deleted successfully');
      fetchProducts();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
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
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        {show && (
          <AddProduct
            setShow={setShow}
            fetchProducts={fetchProducts}
            showAlert={showAlert}
          />
        )}
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
                <div>Image</div>
                <div>Name</div>
                <div>Price</div>
                <div>Category</div>
                <div>Action</div>
              </div>
              <div className="table-body">
                {products.map((product) => {
                  const { _id: id, name, category, price, image } = product;
                  return (
                    <div key={id} className="table-row">
                      <div>{id}</div>
                      <div className="image-div">
                        <img src={image} alt="" />
                      </div>
                      <div className="name-div">{name}</div>
                      <div>
                        <span className="peso-sign">&#8369;</span>
                        {price[0].price}.00
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
