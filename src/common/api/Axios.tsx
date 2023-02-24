import axios from 'axios';
const BASE_URL = import.meta.env.VITE_HOST_URL;
const baseApi = (url: string) => {
  const instance = axios.create({
    baseURL: url,
  });
  return instance;
};

export const authApi = (url: string, token: any) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return instance;
};

export const defaultInstance = baseApi(BASE_URL);
