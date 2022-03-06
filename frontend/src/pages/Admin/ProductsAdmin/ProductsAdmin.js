import React, { useState, useEffect } from 'react';
// styles
import './ProductsAdmin.css';
// icons
// import { AiFillDelete } from 'react-icons/ai';
// import { FaEdit } from 'react-icons/fa';
// components
import Loading from '../../../components/Loading/Loading';
import Alert from '../../../components/Alert/Alert';
// pages
import HeaderAdmin from '../Header/HeaderAdmin';
import SidebarAdmin from '../Sidebar/SidebarAdmin';
import AddProduct from './AddProduct';
// axios
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductsAdmin = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();
  // if not login - redirect to login page
  useEffect(() => {
    if (!userInfo || userInfo.role === 'user') {
      navigate('/login');
    }
  }, [navigate, userInfo]);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [productDisabled, setProductDisabled] = useState(false);
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
  }, [alert]);

  // delete product;
  // const deleteProduct = async (id) => {
  //   setLoading(true);
  //   try {
  //     await axios.delete(`/api/v1/products/${id}`);
  //     setLoading(false);
  //     showAlert(true, 'danger', 'product deleted successfully');
  //     fetchProducts();
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //   }
  // };

  const disableProduct = async (id) => {
    // const specificItem = products.find((item) => item._id === id);
    // console.log(specificItem);
    setProductDisabled(!productDisabled);

    setLoading(true);
    try {
      await axios.patch(`/api/v1/products/${id}`, {
        disabled: productDisabled,
      });

      setLoading(false);
      fetchProducts();
    } catch (error) {
      setLoading(false);
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
      <main className="main">
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
              <h3>All Cakes</h3>
              <button onClick={() => setShow(true)}>Add Cake</button>
            </div>
            <div className="table-container">
              <div className="table-header">
                <div>ID</div>
                <div>Image</div>
                <div>Name</div>
                <div>Price</div>
                <div>Category</div>
                {/* <div>Action</div> */}
              </div>
              <div className="table-body">
                {products.map((product) => {
                  const { _id: id, name, category, price, image } = product;
                  return (
                    <div
                      key={id}
                      className={`${
                        !product.disabled ? 'table-row' : 'table-row disabled'
                      }`}
                    >
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
                        {/* <button className="action-edit-btn">
                          <FaEdit />
                        </button>
                        <button
                          className="action-delete-btn"
                          onClick={() => deleteProduct(id)}
                        >
                          <AiFillDelete />
                        </button> */}
                        <button
                          className="action-disable-btn"
                          onClick={() => disableProduct(id)}
                        >
                          Disable
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
