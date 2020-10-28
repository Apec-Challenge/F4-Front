import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [READ_PLACE, READ_PLACE_SUCCESS, READ_PLACE_FAILURE] = createRequestActionTypes(
  'place/READ_PLACE'
);

export const readPlace = createAction(READ_PLACE);

const readPlaceSaga = createRequestSaga(READ_PLACE, api.readPlace);

export function* placeSaga() {
  yield takeLatest(READ_PLACE, readPlaceSaga);
}

const initialState = {
  place: null,
  placeError: null,
};

export default handleActions(
  {
    [READ_PLACE_SUCCESS]: (state, { payload: place }) => ({
      ...state,
      place,
    }),
    [READ_PLACE_FAILURE]: (state, { payload: placeError }) => ({
      ...state,
      placeError,
    }),
  },
  initialState
);
