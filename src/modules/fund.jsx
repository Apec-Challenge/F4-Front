import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [READ_FUNDLIST, READ_FUNDLIST_SUCCESS, READ_FUNDLIST_FAILURE] = createRequestActionTypes(
  'fund/READ_FUNDLIST'
);
const CHANGE_FUND = 'fund/CHANGE_FUND';

export const readFundList = createAction(READ_FUNDLIST);
export const changeField = createAction(CHANGE_FUND, ({ key, value }) => ({
  key,
  value,
}));

const readFundSaga = createRequestSaga(READ_FUNDLIST, api.readFundList);

export function* fundSaga() {
  yield takeLatest(READ_FUNDLIST, readFundSaga);
}

const initialState = {
  fund: null,
  fundError: null,
  title: '',
  description: '',
  contents: '',
  location: '',
  duration: '',
  goal: '',
};

export default handleActions(
  {
    [READ_FUNDLIST_SUCCESS]: (state, { payload: fund }) => ({
      ...state,
      fund,
    }),
    [READ_FUNDLIST_FAILURE]: (state, { payload: fundError }) => ({
      ...state,
      fundError,
    }),
    [CHANGE_FUND]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
  },
  initialState
);
