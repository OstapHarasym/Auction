import axios, {AxiosResponse} from 'axios';

export const backendUrl = 'http://localhost:7095';

const anonymousInstance = axios.create({
  baseURL: backendUrl,
  timeout: 15000,
});

const authorizedInstance = axios.create({
  baseURL: backendUrl,
  timeout: 15000,
  headers: {
    Authorization : `Bearer ${localStorage.getItem('token')}`
  }
});

const instance = (auth: boolean) => auth ? authorizedInstance : anonymousInstance;

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string, params: {}, auth = false) => instance(auth).get(url, { params: params }).then(responseBody),
  post: (url: string, body: {}, auth = false) => instance(auth).post(url, body).then(responseBody),
  put: (url: string, body: {}, auth = false) => instance(auth).put(url, body).then(responseBody),
  delete: (url: string, auth = false) => instance(auth).delete(url).then(responseBody)
};
