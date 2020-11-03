import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize, login, logout, register } from 'src/modules/auth';

const useAuth = () => {
  const { email, nickname, password1, password2, auth, authError } = useSelector(({ auth }) => ({
    email: auth.email,
    nickname: auth.nickname,
    password1: auth.password1,
    password2: auth.password2,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  const onInit = () => dispatch(initialize());
  const onLogin = e => {
    e.preventDefault();
    dispatch(login({ email, password: password1 }));
  };
  const onLogout = e => {
    e.preventDefault();
    dispatch(logout());
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
    onChangeField,
    email,
    nickname,
    password1,
    password2,
    auth,
    authError,
  };
};

export default useAuth;
