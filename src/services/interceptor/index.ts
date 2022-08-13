import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import config from "config";

const http: AxiosInstance = axios.create({
  baseURL: config.api.base_url,
});

http.interceptors.request.use(
  (
    requestConfig: AxiosRequestConfig
  ): AxiosRequestConfig | Promise<AxiosRequestConfig> => requestConfig,
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default http;
