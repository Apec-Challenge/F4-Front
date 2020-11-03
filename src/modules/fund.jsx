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
const [
  CREATE_COMMENTFUND,
  CREATE_COMMENTFUND_SUCCESS,
  CREATE_COMMENTFUND_FAILURE,
] = createRequestActionTypes('fund/CREATE_COMMENTFUND');
const CHANGE_FUND = 'fund/CHANGE_FUND';
const UNLOAD_CREATEFUND = 'fund/UNLOAD_CREATEFUND';

export const unloadCreate = createAction(UNLOAD_CREATEFUND);
export const createFund = createAction(CREATE_FUND, fd => fd);
export const readFundList = createAction(READ_FUNDLIST);
export const readFund = createAction(READ_FUND, id => id);
export const createComment = createAction(CREATE_COMMENTFUND, ({ user, funding, content }) => ({
  user,
  funding,
  content,
}));
export const changeField = createAction(CHANGE_FUND, ({ key, value }) => ({
  key,
  value,
}));

const createFundSaga = createRequestSaga(CREATE_FUND, api.createFund);
const readFundListSaga = createRequestSaga(READ_FUNDLIST, api.readFundList);
const readFundSaga = createRequestSaga(READ_FUND, api.readFund);
const createCommentSaga = createRequestSaga(CREATE_COMMENTFUND, api.createComment);

export function* fundSaga() {
  yield takeLatest(CREATE_FUND, createFundSaga);
  yield takeLatest(READ_FUNDLIST, readFundListSaga);
  yield takeLatest(READ_FUND, readFundSaga);
  yield takeLatest(CREATE_COMMENTFUND, createCommentSaga);
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
  comment_funding: '',
  comment_content: '',
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
    [CREATE_COMMENTFUND_SUCCESS]: (state, { payload: create }) => ({
      ...state,
      create,
      fund: [
        {
          ...state.fund[0],
          comment_list: state.fund[0].comment_list.concat(create),
        },
      ],
    }),
    [CREATE_COMMENTFUND_FAILURE]: (state, { payload: createError }) => ({
      ...state,
      createError,
    }),
    [UNLOAD_CREATEFUND]: state => ({
      ...state,
      create: initialState.create,
      createError: initialState.creataError,
      title: initialState.title,
      thumbnail_image: initialState.thumbnail_image,
      content_image: initialState.content_image,
      description: initialState.description,
      funding_goal_amount: initialState.funding_goal_amount,
      place: initialState.place,
      address: initialState.address,
      ended_at: initialState.ended_at,
      comment_content: initialState.comment_content,
    }),
  },
  initialState
);
