import { createAction, handleActions } from 'redux-actions';
// import { takeLatest } from 'redux-saga/effects';
// import * as api from 'src/api/api';
// import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const CHANGE_CONTACT = 'contact/CHANGE_CONTACT';

export const changeField = createAction(CHANGE_CONTACT, ({ key, value }) => ({
  key,
  value,
}));

// const readFundSaga = createRequestSaga(READ_FUND, api.readFund);

// export function* fundSaga() {
//   yield takeLatest(READ_FUND, readFundSaga);
// }

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default handleActions(
  {
    [CHANGE_CONTACT]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
  },
  initialState
);
