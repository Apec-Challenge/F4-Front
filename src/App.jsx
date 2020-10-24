import React from 'react';
import { Route } from 'react-router-dom';
import { Main, Test } from './pages';

const App = () => {
  return (
    <>
      <Route exact path="/test" component={Main} />
      <Route exact path="/" component={Test} />
    </>
  );
};

export default App;
