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
  const [varIndex, setVarIndex] = useState(0);
  const [varName, setVarName] = useState('');
  const [varPrice, setVarPrice] = useState(0);

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
  const { name, category, image, variation, price, description } =
    productDetails;
  const navigate = useNavigate();

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
  const addToCartHandler = () => {
    navigate(
      `/cart/${productID}?qty=${qty}&price=${
        !varPrice ? price[varIndex].price : varPrice
      }&${variation}=${!varName ? price[varIndex].variationName : varName}`,
      {
        replace: true,
      }
    );
  };
  const changePrice = (index) => {
    setVarIndex(index);
    setVarName(price[index].variationName);
    setVarPrice(price[index].price);
  };

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

            {/* <div className="sched-input-container">
              <div className="form-control">
                <label htmlFor="deliveryDate">Delivery Date</label>
                <input type="date" id="deliveryDate" />
              </div>
              <div className="form-control">
                <label htmlFor="deliveryTime">Delivery Time</label>
                <input type="time" />
              </div>
            </div> */}

            <h4>{variation}</h4>
            <div className="sizes-container">
              {price.map((variation, i) => {
                const { _id: id, variationName } = variation;
                return (
                  <button
                    key={id}
                    className={`${
                      varIndex === i
                        ? 'var-button var-button-active'
                        : 'var-button'
                    }`}
                    onClick={() => changePrice(i)}
                  >
                    {variationName}
                  </button>
                );
              })}
            </div>

            <h4>
              <span className="peso-sign">&#8369;</span>
              {price[varIndex].price}.00
            </h4>

            <div className="flex">
              <div className="quantity-container">
                <label htmlFor="qty">Qty</label>
                <div>
                  <select
                    id="qty"
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
              <button onClick={addToCartHandler} className="form-submit-btn">
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
