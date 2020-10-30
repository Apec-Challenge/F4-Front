import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [READ_PLACELIST, READ_PLACELIST_SUCCESS, READ_PLACELIST_FAILURE] = createRequestActionTypes(
  'place/READ_PLACELIST'
);

export const readPlaceList = createAction(READ_PLACELIST);

const readPlaceSaga = createRequestSaga(READ_PLACELIST, api.readPlaceList);

export function* placeSaga() {
  yield takeLatest(READ_PLACELIST, readPlaceSaga);
}

const initialState = {
  place: null,
  placeError: null,
};

export default handleActions(
  {
    [READ_PLACELIST_SUCCESS]: (state, { payload: place }) => ({
      ...state,
      place,
    }),
    [READ_PLACELIST_FAILURE]: (state, { payload: placeError }) => ({
      ...state,
      placeError,
    }),
  },
  initialState
);
