import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import useAuth from 'src/hook/auth/useAuth';

const Profile = ({ history }) => {
  const { authLogin, loginLoading } = useAuth(history);
  return (
    <main id="main" className="site-main">
      <div className="page-title background-page">
        <div className="container">
          <h1>Profile</h1>
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <span>/</span>
              </li>
              <li>Profile</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="account-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <nav className="account-bar">
                <ul>
                  <li className="active">
                    <Link to="/mypage/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/mypage/cache">Cache</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-9">
              <div className="account-content profile">
                <h3 className="account-title">My Profiles</h3>
                <div className="account-main">
                  <div className="author clearfix">
                    <Link className="author-avatar" to="/">
                      <img src={require('src/images/placeholder/120x120.png')} alt="" />
                    </Link>
                    {authLogin && !loginLoading && (
                      <div className="author-content">
                        <div className="author-title">
                          <h3>
                            <Link to="/">{authLogin.nickname}</Link>
                          </h3>
                        </div>
                        <div className="author-info">
                          <p>{authLogin.email}</p>
                          <p>IdeaPress Member since July 2017</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <Link to="/" className="btn-primary">
                    Edit Profiles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default withRouter(Profile);
