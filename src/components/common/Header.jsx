import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import logo from 'src/assets/img/logo.png';

const Header = () => {
  return (
    <HeaderWrap>
      <LogoWrap>
        <img src={logo} alt="logo" />
      </LogoWrap>
      <MenuWrap>
        <div className="main-menu">
          <ul className="menu">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Funding</Link>
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
              <Link to="/">Place</Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/">Review</Link>
                </li>
                <li>
                  <Link to="/">Register</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="search">search</div>
        <div className="login">
          <button>Login</button>
        </div>
      </MenuWrap>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: sticky;
  display: flex;
  max-width: 1440px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const LogoWrap = styled.div`
  width: 200px;
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  .main-menu {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .search,
  .login {
    margin-left: 30px;
  }
  .menu {
    display: flex;
    flex-direction: row;
  }
  .menu > li {
    position: relative;
    flex-basis: 20%;
    line-height: 50px;
    text-align: center;
  }
  .menu li a {
    display: block;
    width: 100%;
    height: 100%;
  }
  .menu > li:hover {
    background: ${oc.blue[3]};
  }
  .menu > li:hover .sub-menu {
    display: block;
  }
  .sub-menu {
    width: 100%;
    padding: 0;
    position: absolute;
    border: 1px solid gray;
    display: none;
  }
  .sub-menu li {
    line-height: 50px;
  }
  .sub-menu li:hover {
    background: red;
  }
  button {
    height: 50px !important;
  }
`;

export default Header;
