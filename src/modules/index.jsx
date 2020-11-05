import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import fund, { fundSaga } from './fund';
import place, { placeSaga } from './place';
import auth, { authSaga } from './auth';
import cash, { cashSaga } from './cash';
import contact from './contact';

export function* rootSaga() {
  yield all([fundSaga(), placeSaga(), authSaga(), cashSaga()]);
}

export default combineReducers({
  loading,
  fund,
  place,
  auth,
  contact,
  cash,
});
