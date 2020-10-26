import React, { useState } from 'react';
import Header from 'src/components/common/Header';
import Signs from 'src/components/sign/Signs';
import Footer from 'src/components/common/Footer';

const Sign = () => {
  const [sign, setSign] = useState(false);
  return (
    <>
      <Header />
      <Signs sign={sign} setSign={setSign} />
      <Footer />
    </>
  );
};

export default Sign;
