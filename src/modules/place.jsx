import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [READ_PLACELIST, READ_PLACELIST_SUCCESS, READ_PLACELIST_FAILURE] = createRequestActionTypes(
  'place/READ_PLACELIST'
);
const [READ_PLACE, READ_PLACE_SUCCESS, READ_PLACE_FAILURE] = createRequestActionTypes(
  'place/READ_PLACE'
);
const CHANGE_PLACE = 'place/CHANGE_PLACE';

export const readPlaceList = createAction(READ_PLACELIST);
export const readPlace = createAction(READ_PLACE, place_id => place_id);
export const changeField = createAction(CHANGE_PLACE, ({ key, value }) => ({
  key,
  value,
}));

const readPlaceListSaga = createRequestSaga(READ_PLACELIST, api.readPlaceList);
const readPlaceSaga = createRequestSaga(READ_PLACE, api.readPlace);

export function* placeSaga() {
  yield takeLatest(READ_PLACELIST, readPlaceListSaga);
  yield takeLatest(READ_PLACE, readPlaceSaga);
}

const initialState = {
  places: [],
  place: [],
  placeError: [],
  title: '',
  place_image: null,
  description: '',
  address: '',
  location: {
    lng: '',
    lat: '',
  },
  counts: 0,
  PPE: {
    hand_sanitizer: 0,
    person_hygiene: 0,
    body_temperature_check: 0,
  },
};

export default handleActions(
  {
    [READ_PLACELIST_SUCCESS]: (state, { payload: places }) => ({
      ...state,
      places,
    }),
    [READ_PLACELIST_FAILURE]: (state, { payload: placeError }) => ({
      ...state,
      placeError,
    }),
    [READ_PLACE_SUCCESS]: (state, { payload: place }) => ({
      ...state,
      place,
    }),
    [READ_PLACE_FAILURE]: (state, { payload: placeError }) => ({
      ...state,
      placeError,
    }),
    [CHANGE_PLACE]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
  },
  initialState
);
