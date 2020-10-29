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
  API.post(`/funds`, { title, content, fundingPrice, endedAt, place, user });
export const readFund = id => API.get(`/funds`, id);
export const readFundList = () => API.get(`/funds`);
export const updateFund = ({ title, content, fundingPrice, endedAt, place, user }) =>
  API.put(`/funds`, { title, content, fundingPrice, endedAt, place, user });
export const deleteFund = id => API.delete(`/funds`, { id });

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
  API.post(`/places`, {
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
export const readPlace = id => API.get(`/places`, id);
export const readPlaceList = () => API.get(`/places`);
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
  API.put(`/places`, { title, img, description, businessHours, location, lng, lat, types, PPE });
export const deletePlace = id => API.delete(`/places`, id);

/* Review */
export const createReview = () => API.post(`/review`);
export const readReview = () => API.get(`/review`);
export const readReviewList = () => API.get(`/review`);
export const updateReview = () => API.put(`/review`);
export const deleteReview = () => API.post(`/review`);
