import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
const CHANGE_AUTH = 'auth/CHANGE_AUTH';
const INITIALIZE = 'auth/INITIALIZE';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_AUTH, ({ key, value }) => ({
  key,
  value,
}));
export const login = createAction(LOGIN);

const loginSaga = createRequestSaga(LOGIN, api.login);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  auth: null,
  authError: null,
  email: '',
  nickname: '',
  password1: '',
  password2: '',
};

export default handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: authError }) => ({
      ...state,
      authError,
    }),
    [CHANGE_AUTH]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [INITIALIZE]: () => initialState,
  },
  initialState
);
