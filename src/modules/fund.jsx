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

export const createFund = createAction(
  CREATE_FUND,
  ({
    title,
    description,
    thumbnail_image,
    content_image,
    funding_goal_amount,
    place,
    ended_at,
  }) => ({
    title,
    description,
    thumbnail_image,
    content_image,
    funding_goal_amount,
    place,
    ended_at,
  })
);
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
  fundError: [],
  create: [],
  createError: [],
  title: '',
  thumbnail_image: null,
  content_image: null,
  description: '',
  funding_goal_amount: '',
  place: '',
  ended_at: '',
};

export default handleActions(
  {
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
    [CREATE_FUND_SUCCESS]: (state, { payload: create }) => ({
      ...state,
      create,
    }),
    [CREATE_FUND_FAILURE]: (state, { payload: createError }) => ({
      ...state,
      createError,
    }),
    [CHANGE_FUND]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
  },
  initialState
);
