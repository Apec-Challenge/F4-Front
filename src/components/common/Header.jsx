import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'src/images/assets/logo.png';

const Header = () => {
  return (
    <header id="header" className="site-header">
      <div className="container">
        <div className="site-brand">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="right-header">
          <nav className="main-menu">
            <button className="c-hamburger c-hamburger--htx">
              <span></span>
            </button>
            <ul>
              <li>
                <Link to="/">
                  About Us
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  Contact
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  Funding
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/">List</Link>
                  </li>
                  <li>
                    <Link to="/">Create</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">
                  Place
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/">List</Link>
                  </li>
                  <li>
                    <Link to="/">Create</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="search-icon">
            <Link to="/" className="ion-ios-search-strong"></Link>
            <div className="form-search"></div>
            <form id="searchForm">
              <input type="text" value="" name="search" placeholder="Search..." />
              <button type="submit" value="">
                <span class="iconify" data-icon="ion-ios-search-strong" data-inline="false"></span>
              </button>
            </form>
          </div>
          <div className="login login-button">
            <Link to="/" className="btn-primary">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
