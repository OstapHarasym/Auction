import axios, {AxiosResponse} from 'axios';

export const backendUrl = 'https://auction-be.azurewebsites.net';

const instance = axios.create({
  baseURL: backendUrl,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};
