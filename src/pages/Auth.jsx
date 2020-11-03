import React, { useState } from 'react';
import Header from 'src/components/common/Header';
import Contents from 'src/components/auth/Contents';
import Footer from 'src/components/common/Footer';

const Sign = ({ history }) => {
  const [isLogin, setIsLogin] = useState('login');
  return (
    <>
      <Header />
      <Contents history={history} isLogin={isLogin} setIsLogin={setIsLogin} />
      <Footer />
    </>
  );
};

export default Sign;
