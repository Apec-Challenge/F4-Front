import axios from 'axios';

const API = axios.create({
  withCredentials: true,
});

/* Auth API */
export const login = ({ email, password }) => API.post(`/rest-auth/login`, { email, password });
export const logout = () => API.post(`/rest-auth/logout`);
export const register = ({ email, password1, password2, nickname }) =>
  API.post(`/rest-auth/registration`, { email, password1, password2, nickname });

/* Fund API */
export const createFund = ({ title, content, fundingPrice, endedAt, place, user }) =>
  API.post(`/api/funding/`, { title, content, fundingPrice, endedAt, place, user });
export const readFund = id => API.get(`/api/funding/${id}/`, id);
export const readFundList = () => API.get(`/api/funding/`);
export const updateFund = ({ id, title, content, fundingPrice, endedAt, place, user }) =>
  API.put(`/api/funding/${id}/edit/`, { id, title, content, fundingPrice, endedAt, place, user });
export const deleteFund = id => API.delete(`/api/funding/${id}/delete/`, { id });

/* Place API */
export const createPlace = ({
  title,
  img,
  description,
  location,
  lng,
  lat,
  mask,
  handSnitizer,
  disposableGloves,
}) =>
  API.post(`/places/`, {
    title,
    img,
    description,
    location,
    lng,
    lat,
    mask,
    handSnitizer,
    disposableGloves,
  });
export const readPlace = id => API.get(`/api/place/${id}/`, id);
export const readPlaceList = () => API.get(`/api/place/`);
export const updatePlace = ({
  title,
  img,
  description,
  businessHours,
  location,
  lng,
  lat,
  types,
  PPE,
}) =>
  API.put(`/api/place/`, {
    title,
    img,
    description,
    businessHours,
    location,
    lng,
    lat,
    types,
    PPE,
  });
export const deletePlace = id => API.delete(`/api/place/`, id);

/* Review */
export const createReview = () => API.post(`/review`);
export const readReview = () => API.get(`/review`);
export const readReviewList = () => API.get(`/review`);
export const updateReview = () => API.put(`/review`);
export const deleteReview = () => API.post(`/review`);
