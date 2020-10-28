import React from 'react';
import { Link } from 'react-router-dom';

const Contents = ({ type, setType }) => {
  return (
    <>
      {!type ? (
        <main id="main" className="site-main">
          <div className="page-title background-page">
            <div className="container">
              <h1>Login</h1>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                    <span>/</span>
                  </li>
                  <li>Login</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="main-content">
              <div className="form-login">
                <h2>Login with your account</h2>
                <form id="loginForm" className="clearfix">
                  <div className="field">
                    <input type="email" value="" name="s" placeholder="E-mail Address" />
                  </div>
                  <div className="field">
                    <input type="text" value="" name="s" placeholder="Password" />
                  </div>
                  <div className="inline clearfix">
                    <button type="submit" value="Send Messager" className="btn-primary">
                      Login
                    </button>
                    <p>
                      Not a member yet? <Link onClick={() => setType(true)}>Register now</Link>
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
              <h1>Register</h1>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                    <span>/</span>
                  </li>
                  <li>Register</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="main-content">
              <div className="form-login form-register">
                <h2>Register for Free</h2>
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
                      Register
                    </button>
                    <p>
                      Not a member yet? <Link onClick={() => setType(false)}>Login now</Link>
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

export default Contents;
