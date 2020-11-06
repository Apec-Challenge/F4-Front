import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import useAuth from 'src/hook/auth/useAuth';
import useAddCash from 'src/hook/common/useAddCash';
import useReadUser from 'src/hook/common/useReadUser';

const Profile = ({ history }) => {
  const { authLogin, loginLoading } = useAuth(history);
  const { onChangeField, onAddCash, onUnload, coin, cash, cashError, loading } = useAddCash();
  const { user, userError, userLoading } = useReadUser();
  const onChangeCoin = e => onChangeField({ key: 'coin', value: e.target.value });
  useEffect(() => {
    return () => {
      onUnload();
    };
  }, [cash]);
  return (
    <main id="main" className="site-main">
      <div className="page-title background-page">
        <img
          src={require('src/images/profile.jpg')}
          alt=""
          style={{ height: '220px', width: '1920px' }}
        />
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
                          {user && !userLoading && (
                            <p style={{ display: 'flex', alignItems: 'center' }}>
                              <img
                                style={{ height: '15px', width: '15px', marginRight: '10px' }}
                                src={require('src/images/coin.png')}
                                alt=""
                              />
                              {user.money} coin
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="field">
                    <input
                      style={{ background: 'white', width: '300px', marginRight: '20px' }}
                      type="number"
                      value={coin}
                      name="coin"
                      placeholder="coin"
                      onChange={onChangeCoin}
                    />
                    <button type="button" className="btn-primary" onClick={onAddCash}>
                      Add Cash
                    </button>
                  </div>
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
