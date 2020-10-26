import React from 'react';
import { Link } from 'react-router-dom';

const Signin = ({ sign, setSign }) => {
  return (
    <>
      {!sign ? (
        <main id="main" className="site-main">
          <div className="page-title background-page">
            <div className="container">
              <h1>Sign In</h1>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                    <span>/</span>
                  </li>
                  <li>Sign In</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="main-content">
              <div className="form-login">
                <h2>Sign in with your account</h2>
                <form id="loginForm" className="clearfix">
                  <div className="field">
                    <input type="email" value="" name="s" placeholder="E-mail Address" />
                  </div>
                  <div className="field">
                    <input type="text" value="" name="s" placeholder="Password" />
                  </div>
                  <div className="inline clearfix">
                    <button type="submit" value="Send Messager" className="btn-primary">
                      Sign In
                    </button>
                    <p>
                      Not a member yet? <Link onClick={() => setSign(true)}>Sign Up</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main id="main" className="site-main">
          <div className="page-title background-page">
            <div className="container">
              <h1>Sign Up</h1>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                    <span>/</span>
                  </li>
                  <li>Sign Up</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="main-content">
              <div className="form-login form-register">
                <h2>Sign up for Free</h2>
                <form id="registerForm" className="clearfix">
                  <div className="field">
                    <input type="text" value="" name="s" placeholder="First Name" />
                  </div>
                  <div className="field">
                    <input type="text" value="" name="s" placeholder="Last Name" />
                  </div>
                  <div className="field">
                    <input type="email" value="" name="s" placeholder="E-mail Address" />
                  </div>
                  <div className="field">
                    <input type="text" value="" name="s" placeholder="Password" />
                  </div>
                  <div className="inline clearfix">
                    <button type="submit" value="Send Messager" className="btn-primary">
                      Sign Up
                    </button>
                    <p>
                      Not a member yet? <Link onClick={() => setSign(false)}>Sign In</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Signin;
