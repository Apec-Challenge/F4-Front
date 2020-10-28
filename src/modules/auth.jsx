import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const login = createAction(LOGIN);

const loginSaga = createRequestSaga(LOGIN, api.login);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  auth: null,
  authError: null,
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
  },
  initialState
);
