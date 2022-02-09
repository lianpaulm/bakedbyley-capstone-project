import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../actions/userActions';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const redirect = location.search
    ? location.search.split('=')[1]
    : '/products';

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate(redirect, { replace: true });
    }
  }, [userInfo, redirect, navigate]);

  return (
    <>
      <main>
        <section className="user-form-section">
          <div className="col-1">
            <form className="user-form" onSubmit={submitHandler}>
              <div className="header">
                <Link to="/" className="brand">
                  BakedbyLey
                </Link>
                <h3>Hi, Welcome to BakedbyLey!</h3>
                <h4>Login to your account</h4>
              </div>
              {loading && <div className="form-loading">Loading...</div>}
              {error && <p className="form-error-alert">{error}</p>}
              <div className="form-control">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* sumbmit btn */}
              <div className="form-control">
                <button type="submit" className="form-submit-btn">
                  Login
                </button>
              </div>
              {/* link to register */}
              <p className="new-customer">
                Don't have an account yet?{' '}
                <Link to={`/signup?redirect=${redirect}`}>Sign Up</Link>
              </p>
            </form>
          </div>
          <div className="col-2">
            <img src="./images/svgs/svg4.svg" alt="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
