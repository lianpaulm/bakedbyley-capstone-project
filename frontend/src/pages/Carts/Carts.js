import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

import './Carts.css';
import { IoMdClose } from 'react-icons/io';

// components
import Header from '../../components/Header/Header';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const Carts = () => {
  const { id: productID } = useParams();
  const location = useLocation();
  const qty = location.search
    ? Number(location.search.split('&')[0].split('=')[1])
    : 1;
  const varPrice = location.search
    ? Number(location.search.split('&')[1].split('=')[1])
    : 1;
  const varName = location.search
    ? location.search.split('&')[2].split('=')[1]
    : '6x4';
  const variation = location.search
    ? location.search.split('&')[2].split('=')[0]
    : 'sizes';

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty, varPrice, varName, variation));
    }
  }, [dispatch, productID, qty, varPrice, varName, variation]);

  // delete action
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <main>
          <Breadcrumbs title={'Your shopping cart'} />
          <section className="container no-shopping-cart-cont">
            <div className="empty-cart-text">
              <h3>Your shopping cart is currently empty</h3>
              <Link to="/products">
                <p className="form-submit-btn">Go Shopping</p>
              </Link>
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Breadcrumbs title={'Your shopping cart'} />
        <section className="container">
          <div className="cart-table-container">
            <div className="cart-table-header">
              <div>PRODUCT</div>
              <div>PRICE</div>
              <div>QTY</div>
              <div>TOTAL</div>
              <div></div>
            </div>
            <div className="cart-table-body">
              {cartItems.map((item) => {
                const {
                  name,
                  image,
                  varPrice,
                  varName,
                  variation,
                  product,
                  qty,
                } = item;
                return (
                  <div key={product} className="cart-table-row">
                    <div className="row-product-cont">
                      <img src={image} alt={name} />
                      <div>
                        <Link to={`/products/${product}`}>
                          <h4>{name}</h4>
                        </Link>
                        {/* <p className="product-sched">
                          Delivery Date: 02/02/2022 <br />
                          Delivery Time: 11am
                        </p> */}
                        <p className="var-text">
                          <span>{variation}: </span>
                          {varName}
                        </p>
                      </div>
                    </div>
                    <div className="row-price">
                      <span className="peso-sign">&#8369;</span>
                      {varPrice}.00
                    </div>

                    <div className="row-qty">
                      <select
                        id="qty"
                        value={qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(
                              product,
                              Number(e.target.value),
                              varPrice,
                              varName,
                              variation
                            )
                          )
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>

                    <div className="row-total">
                      <span className="peso-sign">&#8369;</span>
                      {varPrice * qty}.00
                    </div>
                    <div
                      className="row-remove-btn"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <IoMdClose />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-footer">
              <div className="cart-summary-cont">
                <div className="cart-summary-flex">
                  <p>SUBTOTAL</p>
                  <p className="subtotal-value">
                    <span className="peso-sign">&#8369;</span>
                    {cartItems.reduce((a, c) => a + c.varPrice * c.qty, 0)}
                  </p>
                </div>
                <div className="cart-summary-flex">
                  <p>ITEMS</p>
                  <p className="items-qty-text">
                    {cartItems.reduce((a, c) => a + c.qty, 0)} items
                  </p>
                </div>
                <div className="form-submit-btn" onClick={checkoutHandler}>
                  Checkout
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Carts;
