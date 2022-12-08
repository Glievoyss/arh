import { getApiInstance } from './apiClient';

export const getRequest = url => {
  const api = getApiInstance();

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => reject(err));
  });
};

export const postRequest = (url, REQ_BODY) => {
  const api = getApiInstance();

  return new Promise((resolve, reject) => {
    api
      .post(url, REQ_BODY)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => reject(err));
  });
};

export const deleteRequest = (url, REQ_BODY) => {
  const api = getApiInstance();

  return new Promise((resolve, reject) => {
    api
      .delete(url, { data: REQ_BODY })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => reject(err));
  });
};

export const putRequest = (url, REQ_BODY) => {
  const api = getApiInstance();

  return new Promise((resolve, reject) => {
    api
      .put(url, REQ_BODY)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => reject(err));
  });
};
