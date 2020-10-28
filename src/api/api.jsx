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
export const readPlace = () => API.get(`/places`);
