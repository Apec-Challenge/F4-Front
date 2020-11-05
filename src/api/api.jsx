import axios from 'axios';

const API = axios.create({
  withCredentials: true,
});

/* Auth API */
export const login = ({ email, password }) => API.post(`/rest-auth/login/`, { email, password });
export const logout = () => API.post(`/rest-auth/logout/`);
export const register = ({ email, password1, password2, nickname }) =>
  API.post(`/rest-auth/registration/`, { email, password1, password2, nickname });

/* Fund API */
export const createFund = fd => API.post(`/api/funding-create/`, fd);
export const readFund = id => API.get(`/api/funding/?id=${id}`, { id });
export const readFundList = () => API.get(`/api/funding/`);
export const updateFund = ({ id, title, content, fundingPrice, endedAt, place, user }) =>
  API.put(`/api/funding/${id}/edit/`, { id, title, content, fundingPrice, endedAt, place, user });
export const deleteFund = id => API.delete(`/api/funding/${id}/delete/`, { id });
export const createComment = ({ user, funding, content }) =>
  API.post(`/api/funding-comment/`, { user, funding, content });

/* Place API */
export const createPlace = fd => API.post(`/api/place/`, fd);
export const readPlace = place_id => API.get(`/api/place/${place_id}/`, { place_id });
export const readPlaceList = () => API.get(`/api/place/`);
export const updatePlace = ({
  place_id,
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
  API.put(`/api/${place_id}/place/`, {
    place_id,
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
export const deletePlace = place_id => API.delete(`/api/${place_id}/place/`, { place_id });

/* Review */
export const createReview = ({ user, place, content, rating, user_likes }) =>
  API.post(`/api/review/`, { user, place, content, rating, user_likes });
export const readReview = place_id => API.get(`/api/review/?place=${place_id}`, { place_id });
export const updateReview = ({ id, content }) => API.put(`/api/review/${id}/`, { id, content });
export const deleteReview = id => API.put(`/api/review/delete/${id}/`, { id });

/* Cash */
export const addCash = ({ money, authorization }) =>
  API.put(
    `/api/accounts/money-recharge/`,
    { money },
    {
      headers: {
        Authorization: `Token ${authorization}`,
      },
    }
  );
export const fundCash = ({ place, money, authorization }) =>
  API.post(
    `/api/accounts/money-recharge/`,
    { place, money },
    { headers: { Authorization: `Token ${authorization}` } }
  );

/* Like */
export const fundLike = ({ nickname, id }) => API.get(`/funding_like/${nickname}/${id}/`);
export const reveiwLike = ({ nickname, id }) => API.get(`/review_like/${nickname}/${id}/`);
export const placeLike = ({ nickname, place_id }) =>
  API.get(`/place_like/${nickname}/${place_id}/`);

/* user */
export const readUser = id => API.get(`/api/user/${id}/`);
