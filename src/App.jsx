import React from 'react';
import { Route } from 'react-router-dom';
import { Main, Auth, AboutUs, Contacts, List, Create, Detail } from './pages';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/contact" component={Contacts} />
      <Route exact path="/:menu/list" component={List} />
      <Route exact path="/:menu/create" component={Create} />
      <Route exact path="/:menu/detail/:id" component={Detail} />
    </>
  );
};

export default App;
