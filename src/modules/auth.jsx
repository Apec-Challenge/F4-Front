import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
const [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE] = createRequestActionTypes('auth/LOGOUT');
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');
const CHANGE_AUTH = 'auth/CHANGE_AUTH';
const SET_AUTH = 'auth/SET_AUTH';
const INITIALIZE = 'auth/INITIALIZE';

export const initialize = createAction(INITIALIZE);
export const setAuth = createAction(SET_AUTH, authLogin => authLogin);
export const changeField = createAction(CHANGE_AUTH, ({ key, value }) => ({
  key,
  value,
}));
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));
export const logout = createAction(LOGOUT);
export const register = createAction(REGISTER, ({ email, nickname, password1, password2 }) => ({
  email,
  nickname,
  password1,
  password2,
}));

const loginSaga = createRequestSaga(LOGIN, api.login);
const logoutSaga = createRequestSaga(LOGOUT, api.logout);
const registerSaga = createRequestSaga(REGISTER, api.register);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(REGISTER, registerSaga);
}

const initialState = {
  authLogin: null,
  authLogout: null,
  authRegister: null,
  authError: null,
  email: '',
  nickname: '',
  password1: '',
  password2: '',
};

export default handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload: authLogin }) => ({
      ...state,
      authLogin,
    }),
    [LOGIN_FAILURE]: (state, { payload: authError }) => ({
      ...state,
      authError,
    }),
    [LOGOUT_SUCCESS]: (state, { payload: authLogout }) => ({
      ...state,
      authLogout,
    }),
    [LOGOUT_FAILURE]: (state, { payload: authError }) => ({
      ...state,
      authError,
    }),
    [REGISTER_SUCCESS]: (state, { payload: authRegister }) => ({
      ...state,
      authRegister,
    }),
    [REGISTER_FAILURE]: (state, { payload: authError }) => ({
      ...state,
      authError,
    }),
    [CHANGE_AUTH]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [SET_AUTH]: (state, { payload: authLogin }) => ({
      ...state,
      authLogin,
    }),
    [INITIALIZE]: () => initialState,
  },
  initialState
);
