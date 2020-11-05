import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [READ_USER, READ_USER_SUCCESS, READ_USER_FAILURE] = createRequestActionTypes(
  'user/READ_USER'
);

export const readUser = createAction(READ_USER);

const readUserSaga = createRequestSaga(READ_USER, api.readUser);

export function* userSaga() {
  yield takeLatest(READ_USER, readUserSaga);
}

const initialState = {
  user: [],
  userError: null,
};

export default handleActions(
  {
    [READ_USER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [READ_USER_FAILURE]: (state, { payload: userError }) => ({
      ...state,
      userError,
    }),
  },
  initialState
);
