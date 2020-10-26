import React from 'react';
import Header from 'src/components/common/Header';
import Create from 'src/components/fund/Create';
import List from 'src/components/fund/List';
import Detail from 'src/components/fund/Detail';
import Footer from 'src/components/common/Footer';

const Fund = ({ match }) => {
  const { menu } = match.params;
  return (
    <>
      <Header />
      {menu === 'create' && <Create />}
      {menu === 'list' && <List />}
      {menu === 'detail' && <Detail />}
      <Footer />
    </>
  );
};

export default Fund;
