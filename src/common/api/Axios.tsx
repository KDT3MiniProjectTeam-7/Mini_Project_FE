import axios from 'axios';

const BASE_URL = import.meta.env.VITE_HOST_URL;

const baseApi = (url : string, options? : any) => {
  const instance = axios.create({
    baseURL:url,
    ...options
  })

  return instance
}

const authApi = (url : string, options? : any) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${document.cookie.slice(12)}`,
      ...options
    },
  })

  return instance
}

export const defaultInstance = baseApi(BASE_URL);
export const authInstance = authApi(BASE_URL);
