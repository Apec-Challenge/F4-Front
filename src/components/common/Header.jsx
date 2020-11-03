import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'src/images/logo_color.png';

const Header = () => {
  const [login, setLogin] = useState(false);
  const onShow = () => {
    document.querySelector('.form-search').style.display = 'block';
    document.querySelector('#searchForm').style.display = 'block';
  };
  const onHide = () => {
    document.querySelector('.form-search').style.display = 'none';
    document.querySelector('#searchForm').style.display = 'none';
  };
  const onChange = e => {
    console.log(e.target.value);
  };
  const cookies = document.cookie;
  useEffect(() => {
    if (cookies) {
      setLogin(true);
    }
    if (!cookies) {
      setLogin(false);
    }
  }, [cookies]);
  return (
    <header id="header" className="site-header">
      <div className="container">
        <div className="site-brand">
          <Link to="/">
            <img className="logo" src={Logo} alt="" />
          </Link>
        </div>
        <div className="right-header">
          <nav className="main-menu">
            <button type="button" className="c-hamburger c-hamburger--htx">
              <span />
            </button>
            <ul>
              <li>
                <Link to="/about">
                  About Us
                  <i className="fa fa-caret-down" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact
                  <i className="fa fa-caret-down" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="/fund/list">
                  Funding
                  <i className="fa fa-caret-down" aria-hidden="true" />
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/fund/list">List</Link>
                  </li>
                  <li>
                    <Link to="/fund/create">Create</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/place/list">
                  Place
                  <i className="fa fa-caret-down" aria-hidden="true" />
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/place/list">List</Link>
                  </li>
                  <li>
                    <Link to="/place/create">Create</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="search-icon">
            <div
              className="fa fa-search"
              aria-hidden="true"
              onClick={onShow}
              style={{ cursor: 'pointer' }}
            />
            <div className="form-search" onClick={onHide} />
            <form id="searchForm">
              <input
                type="text"
                value=""
                name="search"
                placeholder="Search..."
                onChange={onChange}
              />
              <button type="submit" value="">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
          <div className="login login-button">
            {login ? (
              <Link to="/auth" className="btn-primary">
                Login
              </Link>
            ) : (
              <div>회원님 환영</div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
