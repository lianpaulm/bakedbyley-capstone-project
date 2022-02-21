import React, { useState, useEffect } from 'react';
import axios from 'axios';
// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Loading from '../../components/Loading/Loading';
// date picker package
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  const [deliveryTime, setDeliveryTime] = useState('9am-1pm');
  const [selectedDate, setSelectedDate] = useState(new Date());

  // delivery Date
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = selectedDate.getMonth();
  const day = selectedDate.getDate();
  const year = selectedDate.getFullYear();
  const deliveryDate = `${months[month]}/${day}/${year}`;

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
  console.log(deliveryTime);

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
      }&${variation}=${
        !varName ? price[varIndex].variationName : varName
      }&deliveryDate=${deliveryDate}&deliveryTime=${deliveryTime}`,
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

            <div className="sched-input-container">
              <div className="form-control">
                <label htmlFor="deliveryDate">Delivery Date</label>
                <DatePicker
                  className="delivery-date-select"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                ></DatePicker>
              </div>
              <div className="form-control">
                <label htmlFor="deliveryTime">Delivery Time</label>
                <select
                  className="delivery-time-select"
                  id="deliveryTime"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                >
                  <option value="9am-1pm">9am - 1pm</option>
                  <option value="1pm-4pm">1pm - 4pm</option>
                  <option value="4pm-6pm">4pm - 6pm</option>
                </select>
              </div>
            </div>

            <h4 className="var-name">{variation}</h4>
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
              <div className="quantity-container form-control">
                <label htmlFor="qty">Quantity</label>
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
