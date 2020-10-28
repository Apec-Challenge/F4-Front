import React from 'react';
import { Route } from 'react-router-dom';
import { Main, Auth, AboutUs, Contacts, Fund, Place } from './pages';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/contact" component={Contacts} />
      <Route exact path="/fund/:menu" component={Fund} />
      <Route exact path="/place/:menu" component={Place} />
    </>
  );
};

export default App;
