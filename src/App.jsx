import React from 'react';
import { Route } from 'react-router-dom';
import { Main, Sign, AboutUs, Contacts, Fund, Place } from './pages';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/sign" component={Sign} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/contact" component={Contacts} />
      <Route exact path="/fund/:menu" component={Fund} />
      <Route exact path="/place/:menu" component={Place} />
    </>
  );
};

export default App;
