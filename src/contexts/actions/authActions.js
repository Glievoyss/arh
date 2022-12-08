import jwtDecode from 'jwt-decode';

import {
  SET_CURRENT_USER,
  NOT_ENTER_USER,
  SET_USER_LOGOUT
} from './actionTypes';
import { getApiInstance, initAuthorized, apiInit } from 'utils/apiClient';

export const login = userData => async dispatch => {
  const api = getApiInstance();
  await api
    .post('/login', userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('access_token', token);
      initAuthorized(token);
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
      window.location.href = '/';
    })
    .catch(() => {
      dispatch(setNotEnterUser());
    });
};

export const logout = () => async dispatch => {
  const api = getApiInstance();
  await api
    .get('/logout')
    .then(() => {
      dispatch(setUserLogout());
    })
    .catch(err => {
      console.log(err);
    });
  localStorage.removeItem('access_token');
  apiInit(false);
  dispatch(setCurrentUser({}));
  window.location.href = '/';
};

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const setNotEnterUser = () => ({
  type: NOT_ENTER_USER
});

export const setUserLogout = () => ({
  type: SET_USER_LOGOUT
});
