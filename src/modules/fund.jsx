import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [READ_FUND, READ_FUND_SUCCESS, READ_FUND_FAILURE] = createRequestActionTypes(
  'fund/READ_FUND'
);
const CHANGE_FUND = 'fund/CHANGE_FUND';

export const readFund = createAction(READ_FUND);
export const changeField = createAction(CHANGE_FUND, ({ key, value }) => ({
  key,
  value,
}));

const readFundSaga = createRequestSaga(READ_FUND, api.readFund);

export function* fundSaga() {
  yield takeLatest(READ_FUND, readFundSaga);
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
    [READ_FUND_SUCCESS]: (state, { payload: fund }) => ({
      ...state,
      fund,
    }),
    [READ_FUND_FAILURE]: (state, { payload: fundError }) => ({
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
