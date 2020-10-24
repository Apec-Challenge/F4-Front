import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import logo from 'src/assets/img/logo.png';
import search from 'src/assets/svg/search.svg';

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
        <div className="search">
          <img src={search} alt="" />
        </div>
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
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const LogoWrap = styled.div`
  width: 125px;
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin-top: 10px;
  .main-menu {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .search,
  .login {
    margin-left: 30px;
    cursor: pointer;
  }
  .search {
    height: 30px;
    width: 30px;
  }
  .login button {
    cursor: pointer;
    height: 40px;
    width: 75px;
    background: ${oc.blue[5]};
    border: 0;
    color: white;
  }
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0;
  }
  .menu > li {
    position: relative;
    flex-basis: 20%;
    line-height: 50px;
    text-align: center;
  }
  .menu li a {
    display: block;
    color: black;
    width: 100%;
    height: 100%;
  }
  .menu > li a:hover {
    color: ${oc.blue[5]};
  }
  .menu > li:hover .sub-menu {
    top: 60px;
    visibility: visible;
    opacity: 1;
  }
  .sub-menu {
    width: 100%;
    background: white;
    padding: 0;
    position: absolute;
    top: 100px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s;
  }
  .sub-menu li {
    line-height: 50px;
  }
  .sub-menu li a:hover {
    color: ${oc.blue[5]};
  }
  .sub-menu li {
    border-top: 1px solid ${oc.gray[3]};
  }
`;

export default Header;
