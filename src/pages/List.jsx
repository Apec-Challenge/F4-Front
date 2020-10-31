import React from 'react';
import Header from 'src/components/common/Header';
import FundList from 'src/components/fund/List';
import PlaceList from 'src/components/place/List';
import Footer from 'src/components/common/Footer';

const List = ({ match }) => {
  const { menu } = match.params;
  return (
    <>
      <Header />
      {menu === 'fund' && <FundList />}
      {menu === 'place' && <PlaceList />}
      <Footer />
    </>
  );
};

export default List;
