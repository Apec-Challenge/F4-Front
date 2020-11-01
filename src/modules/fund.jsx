import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [CREATE_FUND, CREATE_FUND_SUCCESS, CREATE_FUND_FAILURE] = createRequestActionTypes(
  'fund/CREATE_FUND'
);
const [READ_FUNDLIST, READ_FUNDLIST_SUCCESS, READ_FUNDLIST_FAILURE] = createRequestActionTypes(
  'fund/READ_FUNDLIST'
);
const [READ_FUND, READ_FUND_SUCCESS, READ_FUND_FAILURE] = createRequestActionTypes(
  'fund/READ_FUND'
);
const CHANGE_FUND = 'fund/CHANGE_FUND';
const UNLOAD_CREATEFUND = 'fund/UNLOAD_CREATEFUND';

export const unloadCreate = createAction(UNLOAD_CREATEFUND);
export const createFund = createAction(CREATE_FUND, fd => fd);
export const readFundList = createAction(READ_FUNDLIST);
export const readFund = createAction(READ_FUND, id => id);
export const changeField = createAction(CHANGE_FUND, ({ key, value }) => ({
  key,
  value,
}));

const createFundSaga = createRequestSaga(CREATE_FUND, api.createFund);
const readFundListSaga = createRequestSaga(READ_FUNDLIST, api.readFundList);
const readFundSaga = createRequestSaga(READ_FUND, api.readFund);

export function* fundSaga() {
  yield takeLatest(CREATE_FUND, createFundSaga);
  yield takeLatest(READ_FUNDLIST, readFundListSaga);
  yield takeLatest(READ_FUND, readFundSaga);
}

const initialState = {
  funds: [],
  fund: [],
  fundError: null,
  create: null,
  createError: null,
  title: '',
  thumbnail_image: null,
  content_image: null,
  description: '',
  funding_goal_amount: '',
  place: '',
  address: '',
  ended_at: '',
};

export default handleActions(
  {
    [CREATE_FUND_SUCCESS]: (state, { payload: create }) => ({
      ...state,
      create,
    }),
    [CREATE_FUND_FAILURE]: (state, { payload: createError }) => ({
      ...state,
      createError,
    }),
    [READ_FUNDLIST_SUCCESS]: (state, { payload: funds }) => ({
      ...state,
      funds,
    }),
    [READ_FUNDLIST_FAILURE]: (state, { payload: fundError }) => ({
      ...state,
      fundError,
    }),
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
    [UNLOAD_CREATEFUND]: () => ({
      create: initialState.create,
      createError: initialState.creataError,
    }),
  },
  initialState
);
