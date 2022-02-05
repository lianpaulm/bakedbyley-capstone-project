import React, { useState } from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';

import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { navLinks } from '../../data';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const navigate = useNavigate();
  const goToCartHandler = () => {
    navigate('/cart', { replace: true });
  };

  return (
    <header>
      <div className="navbar container">
        <button className="nav-open" onClick={() => setIsNavbarOpen(true)}>
          <AiOutlineMenu className="menu-icon" />
        </button>

        <NavLink to="/" className="brand">
          BakedbyLey
        </NavLink>

        <nav className={`nav-menu ${isNavbarOpen && 'show-nav-menu'}`}>
          <button className="nav-close" onClick={() => setIsNavbarOpen(false)}>
            <IoMdClose className="close-icon" />
          </button>
          <ul>
            {navLinks.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id}>
                  <NavLink
                    to={url}
                    className={(navData) =>
                      navData.isActive
                        ? 'main-nav-link main-nav-active'
                        : 'main-nav-link'
                    }
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav-cta">
          <div className="cart-button" onClick={goToCartHandler}>
            <AiOutlineShoppingCart className="cart-icon" />
            <div className="amount-container">
              {cartItems.length > 0 && (
                <p className="total-amount">{cartItems.length}</p>
              )}
            </div>
          </div>

          <NavLink to="/login" className="login-btn">
            login
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
