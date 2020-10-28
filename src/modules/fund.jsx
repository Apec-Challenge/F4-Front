import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [READ_FUND, READ_FUND_SUCCESS, READ_FUND_FAILURE] = createRequestActionTypes(
  'fund/READ_FUND'
);

export const readFund = createAction(READ_FUND);

const readFundSaga = createRequestSaga(READ_FUND, api.readFund);

export function* fundSaga() {
  yield takeLatest(READ_FUND, readFundSaga);
}

const initialState = {
  fund: null,
  fundError: null,
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
  },
  initialState
);
