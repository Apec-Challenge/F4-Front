import React from 'react';
import Header from 'src/components/common/Header';
import FundCreate from 'src/components/fund/Create';
import PlaceCreate from 'src/components/place/Create';
import Footer from 'src/components/common/Footer';

const Create = ({ match }) => {
  const { menu } = match.params;
  return (
    <>
      <Header />
      {menu === 'fund' && <FundCreate />}
      {menu === 'place' && <PlaceCreate />}
      <Footer />
    </>
  );
};

export default Create;
