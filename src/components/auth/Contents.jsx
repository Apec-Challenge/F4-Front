import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from 'src/hook/auth/useAuth';

const Contents = ({ history, isLogin, setIsLogin }) => {
  const {
    onLogin,
    onLogout,
    onRegister,
    onInit,
    onChangeField,
    email,
    nickname,
    password1,
    password2,
    auth,
    authError,
  } = useAuth();
  const onChangeEmail = e => onChangeField({ key: 'email', value: e.target.value });
  const onChangeNick = e => onChangeField({ key: 'nickname', value: e.target.value });
  const onChangePw = e => onChangeField({ key: 'password1', value: e.target.value });
  const onChangePwConfirm = e => onChangeField({ key: 'password2', value: e.target.value });
  useEffect(() => {
    onInit();
  }, [isLogin]);
  useEffect(() => {
    if (auth) {
      history.push(`/`);
    }
    if (authError) {
      console.log(authError);
    }
  }, [auth]);
  return (
    <>
      {isLogin === 'login' ? (
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
                <form id="loginForm" className="clearfix" onSubmit={onLogin}>
                  <div className="field">
                    <input
                      type="email"
                      value={email}
                      name="email"
                      placeholder="E-mail Address"
                      onChange={onChangeEmail}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      value={password1}
                      name="password"
                      placeholder="Password"
                      onChange={onChangePw}
                    />
                  </div>
                  <div className="inline clearfix">
                    <button type="submit" value="Send Messager" className="btn-primary">
                      Login
                    </button>
                    <p>
                      Not a member yet?
                      <Link onClick={() => setIsLogin('register')} style={{ cursor: 'pointer' }}>
                        Register now
                      </Link>
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
                <form id="registerForm" className="clearfix" onSubmit={onRegister}>
                  <div className="field">
                    <input
                      type="email"
                      value={email}
                      name="email"
                      placeholder="E-mail Address"
                      onChange={onChangeEmail}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      value={nickname}
                      name="nickname"
                      placeholder="Nickname"
                      onChange={onChangeNick}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      value={password1}
                      name="password"
                      placeholder="Password"
                      onChange={onChangePw}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      value={password2}
                      name="passwordConfirm"
                      placeholder="Password Confirm"
                      onChange={onChangePwConfirm}
                    />
                  </div>
                  <div className="inline clearfix">
                    <button type="submit" value="Send Messager" className="btn-primary">
                      Register
                    </button>
                    <p>
                      Not a member yet?
                      <Link onClick={() => setIsLogin('login')} style={{ cursor: 'pointer' }}>
                        Login now
                      </Link>
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
