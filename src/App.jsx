import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import useAuth from 'src/hook/auth/useAuth';
import { Main, Auth, AboutUs, Contacts, List, Create, Detail, Mypage } from './pages';

const App = () => {
  const { onAuth } = useAuth();
  const initUserInfo = async () => {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    onAuth(userInfo);
  };
  useEffect(() => {
    initUserInfo();
  }, []);
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/contact" component={Contacts} />
      <Route exact path="/:menu/list" component={List} />
      <Route exact path="/:menu/create" component={Create} />
      <Route exact path="/:menu/detail/:id" component={Detail} />
      <Route exact path="/mypage/:menu" component={Mypage} />
    </>
  );
};

export default App;
