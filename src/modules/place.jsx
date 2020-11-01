import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [CREATE_PLACE, CREATE_PLACE_SUCCESS, CREATE_PLACE_FAILURE] = createRequestActionTypes(
  'place/CREATE_PLACE'
);
const [READ_PLACELIST, READ_PLACELIST_SUCCESS, READ_PLACELIST_FAILURE] = createRequestActionTypes(
  'place/READ_PLACELIST'
);
const [READ_PLACE, READ_PLACE_SUCCESS, READ_PLACE_FAILURE] = createRequestActionTypes(
  'place/READ_PLACE'
);
const CHANGE_PLACE = 'place/CHANGE_PLACE';
const UNLOAD_CREATEPLACE = 'place/UNLOAD_CREATEPLACE';

export const unloadCreate = createAction(UNLOAD_CREATEPLACE);
export const createPlace = createAction(CREATE_PLACE, fd => fd);
export const readPlaceList = createAction(READ_PLACELIST);
export const readPlace = createAction(READ_PLACE, place_id => place_id);
export const changeField = createAction(CHANGE_PLACE, ({ key, value }) => ({
  key,
  value,
}));

const createPlaceSaga = createRequestSaga(CREATE_PLACE, api.createPlace);
const readPlaceListSaga = createRequestSaga(READ_PLACELIST, api.readPlaceList);
const readPlaceSaga = createRequestSaga(READ_PLACE, api.readPlace);

export function* placeSaga() {
  yield takeLatest(CREATE_PLACE, createPlaceSaga);
  yield takeLatest(READ_PLACELIST, readPlaceListSaga);
  yield takeLatest(READ_PLACE, readPlaceSaga);
}

const initialState = {
  places: [],
  place: [],
  placeError: null,
  create: null,
  createError: null,
  place_id: '',
  title: '',
  place_image: null,
  description: '',
  address: [],
  location: {
    lng: '',
    lat: '',
  },
  counts: 0,
  PPE: {
    Mask: 0,
    hand_sanitizer: 0,
    disposable_gloves: 0,
  },
};

export default handleActions(
  {
    [CREATE_PLACE_SUCCESS]: (state, { payload: create }) => ({
      ...state,
      create,
    }),
    [CREATE_PLACE_FAILURE]: (state, { payload: createError }) => ({
      ...state,
      createError,
    }),
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
    [UNLOAD_CREATEPLACE]: () => ({
      create: initialState.create,
      createError: initialState.creataError,
    }),
  },
  initialState
);
