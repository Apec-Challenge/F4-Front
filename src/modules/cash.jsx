import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [ADD_CASH, ADD_CASH_SUCCESS, ADD_CASH_FAILURE] = createRequestActionTypes('cash/ADD_CASH');
const [FUND_CASH, FUND_CASH_SUCCESS, FUND_CASH_FAILURE] = createRequestActionTypes(
  'cash/FUND_CASH'
);
const CHANGE_CASH = 'cash/CHANGE_CASH';

export const addCash = createAction(ADD_CASH, ({ money, Authorization }) => ({
  money,
  Authorization,
}));
export const fundCash = createAction(FUND_CASH, ({ place, money, Authorization }) => ({
  place,
  money,
  Authorization,
}));
export const changeField = createAction(CHANGE_CASH, ({ key, value }) => ({
  key,
  value,
}));

const addCashSaga = createRequestSaga(ADD_CASH, api.addCash);
const fundCashSaga = createRequestSaga(FUND_CASH, api.fundCash);

export function* cashSaga() {
  yield takeLatest(ADD_CASH, addCashSaga);
  yield takeLatest(FUND_CASH, fundCashSaga);
}

const initialState = {
  cash: [],
  cashError: null,
  coin: '',
};

export default handleActions(
  {
    [ADD_CASH_SUCCESS]: (state, { payload: cash }) => ({
      ...state,
      cash,
    }),
    [ADD_CASH_FAILURE]: (state, { payload: cashError }) => ({
      ...state,
      cashError,
    }),
    [ADD_CASH_SUCCESS]: (state, { payload: cash }) => ({
      ...state,
      cash,
    }),
    [ADD_CASH_FAILURE]: (state, { payload: cashError }) => ({
      ...state,
      cashError,
    }),
    [CHANGE_CASH]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
  },
  initialState
);
