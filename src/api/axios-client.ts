import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json'
  }
});

axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  // Set custom headers in here
  return config;
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    if (error && error.response && error.response.data) {
      throw error.response.data;
    }
    throw error;
  }
);

export const AxiosClient = axiosClient;
