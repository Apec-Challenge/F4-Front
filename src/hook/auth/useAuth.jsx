import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize, setAuth, login, logout, register } from 'src/modules/auth';

const useAuth = history => {
  const {
    cookie,
    email,
    nickname,
    password1,
    password2,
    authLogin,
    authLogout,
    authRegister,
    authError,
    loginLoading,
    registerLoading,
  } = useSelector(({ auth, loading }) => ({
    cookie: auth.cookie,
    email: auth.email,
    nickname: auth.nickname,
    password1: auth.password1,
    password2: auth.password2,
    authLogin: auth.authLogin,
    authLogout: auth.authLogout,
    authRegister: auth.authRegister,
    authError: auth.authError,
    loginLoading: loading['auth/LOGIN'],
    registerLoading: loading['auth/REGISTER'],
  }));
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  const onInit = () => dispatch(initialize());
  const onAuth = auth => dispatch(setAuth(auth));
  const onLogin = e => {
    e.preventDefault();
    dispatch(login({ email, password: password1 }));
  };
  const onLogout = e => {
    e.preventDefault();
    dispatch(logout());
    localStorage.removeItem('cookie');
    localStorage.removeItem('userInfo');
    history.push(`/`);
  };
  const onRegister = e => {
    e.preventDefault();
    dispatch(register({ email, nickname, password1, password2 }));
  };
  return {
    onLogin,
    onLogout,
    onRegister,
    onInit,
    onAuth,
    onChangeField,
    cookie,
    email,
    nickname,
    password1,
    password2,
    authLogin,
    authLogout,
    authRegister,
    authError,
    loginLoading,
    registerLoading,
  };
};

export default useAuth;
