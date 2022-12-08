// initializes axios by data form config
import axios from 'axios';

let apiInstance = null;
let apiExportIns = null;

// axios.defaults.headers.get['Accept'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
// axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const apiInit = () => {
  if (apiInstance) {
    return apiInstance;
  }
  apiInstance = axios.create({
    timeout: 30000,
    // withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`
      // 'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
    }
    // credentials: 'same-origin'
  });

  return apiInstance;
};

const initAuthorized = token => {
  apiInstance = axios.create({
    timeout: 30000,
    // withCredentials: false,
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`
      // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      // 'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type'
    }
    // credentials: 'same-origin'
  });

  // apiInstance.defaults.headers.common['Accept'] = 'application/json';
  // apiInstance.defaults.headers.common['Content-Type'] = 'application/json';

  apiExportIns = axios.create({
    timeout: 30000,
    // withCredentials: false,
    responseType: 'blob',
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      // 'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`
    }
    // credentials: 'same-origin'
  });

  apiInstance.interceptors.response.use(response => response, interceptor);
};

const getApiInstance = () => {
  return apiInstance;
};

const getExportInstance = () => {
  return apiExportIns;
};

const interceptor = data => {
  if (data && data.response && data.response.status === 401) {
    localStorage.removeItem('access_token');
    window.location = '/login';
  }

  return Promise.reject(data);
};

export { apiInit, getApiInstance, initAuthorized, getExportInstance };
