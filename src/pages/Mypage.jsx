import React from 'react';
import Header from 'src/components/common/Header';
import Profile from 'src/components/mypage/Profile';
import Cache from 'src/components/mypage/Cache';
import Footer from 'src/components/common/Footer';

const Main = ({ match }) => {
  const { menu } = match.params;
  return (
    <>
      <Header />
      {menu === 'profile' && <Profile />}
      {menu === 'cache' && <Cache />}
      <Footer />
    </>
  );
};

export default Main;
