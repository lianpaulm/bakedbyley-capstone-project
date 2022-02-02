import React, { useState, useEffect } from 'react';
import axios from 'axios';
// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Loading from '../../components/Loading/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id: productID } = useParams();
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState([]);

  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/api/v1/products/${productID}`);
      setProductDetails(data.product);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);
  const { name, category, image, price, description } = productDetails;

  const navigate = useNavigate();
  const addToCartHandler = () => {
    navigate(`/cart/${productID}?qty=${qty}`, { replace: true });
  };

  if (loading) {
    return (
      <>
        <Header />
        <main>
          <Loading />
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Breadcrumbs path={`Home / products / ${category} / ${name} `} />
        <section className="product-section container">
          <div className="img-col">
            <img src={image} alt="" />
          </div>
          <div className="info-col">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="sched-input-container">
              <input type="date" />
              <input type="time" />
            </div>
            <h4>
              <span className="peso-sign">&#8369;</span>
              {price}.00
            </h4>
            <div className="flex">
              <div className="quantity-container">
                {/* <button className="quantity-btn">-</button>
                <p className="quantity">0</p>
                <button className="quantity-btn">+</button> */}
                <div className="qty-list">
                  <div>Qty</div>
                  <div>
                    <select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
              <button onClick={addToCartHandler} className="add-to-cart-btn">
                Add to cart
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
