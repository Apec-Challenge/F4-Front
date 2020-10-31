import React from 'react';
import Header from 'src/components/common/Header';
import FundDetail from 'src/components/fund/Detail';
import PlaceDetail from 'src/components/place/Detail';
import Footer from 'src/components/common/Footer';

const Detail = ({ match }) => {
  const { menu, id } = match.params;
  return (
    <>
      <Header />
      {menu === 'fund' && <FundDetail fund_id={id} />}
      {menu === 'place' && <PlaceDetail place_id={id} />}
      <Footer />
    </>
  );
};

export default Detail;
