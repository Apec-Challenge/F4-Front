import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'src/images/logo_color.png';

const Header = () => {
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
            <Link to="/" className="ion-ios-search-strong" />
            <div className="form-search" />
            <form id="searchForm">
              <input type="text" value="" name="search" placeholder="Search..." />
              <button type="submit" value="">
                <span className="iconify" data-icon="ion-ios-search-strong" data-inline="false" />
              </button>
            </form>
          </div>
          <div className="login login-button">
            <Link to="/auth" className="btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
