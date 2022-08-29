import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import config from "config";

function handleBaseUrl() {
  if (config.api.base_url) {
    return config.api.base_url;
  } else {
    throw new Error(
      "No base url in env. Please, add base url to the env file. See the repo: https://github.com/curious-33/trivia"
    );
  }
}

const http: AxiosInstance = axios.create({
  baseURL: handleBaseUrl(),
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
