import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

//Request interceptor
const onRequest = (request: AxiosRequestConfig): AxiosRequestConfig => {
  return request;
};
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.log(`[REQUEST] [ERROR]`, error);

  return Promise.reject(error);
};

//Response interceptor
const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.log(`[RESPONSE] [ERROR]`, error);

  return Promise.reject(error);
};

export const requestInterceptor = {
  onRequest: onRequest,
  onRequestError: onRequestError,
};

export const responseInterceptor = {
  onResponse: onResponse,
  onResponseError: onResponseError,
};
