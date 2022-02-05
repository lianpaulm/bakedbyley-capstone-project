import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <main>
        <section className="user-form-section">
          <div className="col-1">
            <form className="user-form">
              <div className="header">
                <Link to="/" className="brand">
                  BakedbyLey
                </Link>
                <h3>Hi, Welcome to BakedbyLey!</h3>
                <h4>Create an account</h4>
              </div>
              <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  required={true}
                  value={name}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  required={true}
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
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* sumbmit btn */}
              <div className="form-control">
                <button type="submit" className="login-btn">
                  Create Account
                </button>
              </div>

              {/* link to register */}
              <p className="new-customer">
                Already have an account? <Link to="/login">Log In</Link>
              </p>
            </form>
          </div>
          <div className="col-2">
            <img src="./images/svgs/svg3.svg" className="signup-svg" alt="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Signup;
