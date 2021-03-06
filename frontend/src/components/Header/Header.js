import React, { useState } from 'react';
import './Header.css';
import { MdArrowDropDown } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';

import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { navLinks } from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
// import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // cart
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // login
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const navigate = useNavigate();
  const goToCartHandler = () => {
    navigate('/cart', { replace: true });
  };

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <div className="navbar container">
        <button className="nav-open" onClick={() => setIsNavbarOpen(true)}>
          <AiOutlineMenu className="menu-icon" />
        </button>

        <NavLink to="/" className="brand">
          {/* <img className="logo-img" src="https://res.cloudinary.com/dspuu6dpz/image/upload/v1647152736/logo_uti6os.jpg" alt="" /> */}
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
              {cartItems.length > 0 ? (
                <p className="total-amount">{cartItems.length}</p>
              ) : (
                <p className="total-amount">0</p>
              )}
            </div>
          </div>
          {userInfo ? (
            <div
              className={`${
                userMenuOpen ? 'user-menu-open dropdown' : 'dropdown'
              }`}
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <NavLink to="#">
                {/* <FaRegUserCircle className="avatar-svg" /> */}
                {userInfo.name}
                <MdArrowDropDown className="dropdown-icon" />
              </NavLink>
              <ul className="dropdown-content">
                <li>
                  <NavLink to="/orderhistory">Order History</NavLink>
                </li>
                <li>
                  <NavLink to="#logout" onClick={logoutHandler}>
                    Log Out
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login" className="login-btn">
              login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
