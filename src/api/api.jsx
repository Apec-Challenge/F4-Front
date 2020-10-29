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
export const readFund = () => API.get(`/funds`);
export const createFund = () => API.post(`/funds`);
export const removeFund = () => API.post(`/funds`);
export const updateFund = () => API.post(`/funds`);

/* Place API */
export const readPlace = () => API.get(`/places`);
export const createPlace = () => API.post(`/places`);
export const removePlace = () => API.post(`/places`);
export const updatePlace = () => API.post(`/places`);
