import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { register } from '../../actions/userActions';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordAlert, setPasswordAlert] = useState(false);
  const location = useLocation();
  const redirect = location.search
    ? location.search.split('=')[1]
    : '/products';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordAlert(true);
    } else {
      setPasswordAlert(false);
      dispatch(register(name, email, password));
    }
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
            <form className="form user-form" onSubmit={submitHandler}>
              <div className="header signup-header">
                <Link to="/" className="brand">
                  BakedbyLey
                </Link>
                <h3>Hi, Welcome to BakedbyLey!</h3>
                <h4>Create an account</h4>
              </div>
              {loading && <div className="form-loading">Loading...</div>}
              {error && <p className="form-error-alert">{error}</p>}
              {passwordAlert && (
                <p className="form-error-alert">
                  Password and confirm password are not match
                </p>
              )}
              <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
              <div className="form-control">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Enter Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {/* sumbmit btn */}
              <div className="form-control">
                <button type="submit" className="form-submit-btn">
                  Create Account
                </button>
              </div>
              {/* link to login */}
              <p className="new-customer">
                Already have an account?{' '}
                <Link to={`/login?redirect=${redirect}`}>Log In</Link>
              </p>
            </form>
          </div>
          <div className="col-2">
            <img src="./images/svgs/svg3.svg" alt="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Signup;
