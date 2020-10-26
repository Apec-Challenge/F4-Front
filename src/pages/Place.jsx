import React from 'react';
import Header from 'src/components/common/Header';
import Create from 'src/components/place/Create';
import List from 'src/components/place/List';
import Footer from 'src/components/common/Footer';

const Place = ({ match }) => {
  const { menu } = match.params;
  return (
    <>
      <Header />
      {menu === 'create' && <Create />}
      {menu === 'list' && <List />}
      <Footer />
    </>
  );
};

export default Place;
