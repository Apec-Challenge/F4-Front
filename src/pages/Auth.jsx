import React, { useState } from 'react';
import Header from 'src/components/common/Header';
import Contents from 'src/components/auth/Contents';
import Footer from 'src/components/common/Footer';

const Sign = () => {
  const [type, setType] = useState(false);
  return (
    <>
      <Header />
      <Contents type={type} setType={setType} />
      <Footer />
    </>
  );
};

export default Sign;
