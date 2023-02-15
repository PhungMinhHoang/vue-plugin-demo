import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { requestInterceptor, responseInterceptor } from "@/api/interceptor";

// export interface CustomRequestConfig<D = any> extends AxiosRequestConfig<D> {
//   showMessage?: boolean;
// }
//
// export interface CustomerAxiosResponse<T = any, D = any>
//   extends AxiosResponse<T, D> {
//   config: CustomRequestConfig<D>;
// }

export default class BaseAPI {
  private readonly baseURL: string;
  private http: AxiosInstance;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.http = axios.create({
      baseURL,
    });

    // Register Interceptor
    this.registerRequestInterceptor(requestInterceptor.onRequest, requestInterceptor.onRequestError);

    this.registerResponseInterceptor(responseInterceptor.onResponse, responseInterceptor.onResponseError);
  }

  public registerRequestInterceptor(
    onRequest: (config) => AxiosRequestConfig,
    onRequestError: (error: AxiosError) => Promise<AxiosError>
  ) {
    this.http.interceptors.request.use(onRequest, onRequestError);
  }

  public registerResponseInterceptor(
    onResponse: (response: AxiosResponse) => AxiosResponse,
    onResponseError: (error: AxiosError) => Promise<AxiosError>
  ) {
    this.http.interceptors.response.use(onResponse, onResponseError);
  }

  protected url = (endpoint: string) => {
    return `${this.baseURL}${endpoint}`;
  };

  protected _get = async <T, D>(endpoint: string, options: AxiosRequestConfig<D> = {}): Promise<AxiosResponse<T, D>> => {
    const headers = options.headers || {};

    const url = this.url(endpoint);
    return await this.http.get<T, AxiosResponse<T, D>, D>(url, {
      ...options,
      headers,
    });
  };

  protected _post = async <T, D>(
    endpoint: string,
    data?: D,
    options?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T, D>> => {
    const headers: AxiosRequestConfig["headers"] = {
      "Content-Type": "application/json",
      ...((options && options.headers) || {}),
    };
    const url = this.url(endpoint);
    return await this.http.post<T, AxiosResponse<T, D>, D>(url, data, {
      ...options,
      headers,
    });
  };

  protected _put = async <T, D>(
    endpoint: string,
    data?: D,
    options?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T, D>> => {
    const headers: AxiosRequestConfig["headers"] = {
      "Content-Type": "application/json",
      ...((options && options.headers) || {}),
    };
    const url = this.url(endpoint);
    return await this.http.put<T, AxiosResponse<T, D>, D>(url, data, {
      ...options,
      headers,
    });
  };

  protected _patch = async <T, D>(
    endpoint: string,
    data?: D,
    options?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T, D>> => {
    const headers: AxiosRequestConfig["headers"] = {
      "Content-Type": "application/json",
      ...((options && options.headers) || {}),
    };
    const url = this.url(endpoint);
    return await this.http.patch<T, AxiosResponse<T, D>, D>(url, data, {
      ...options,
      headers,
    });
  };

  protected _delete = async <T, D>(
    endpoint: string,
    data?: D,
    options?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T, D>> => {
    const headers: AxiosRequestConfig["headers"] = {
      "Content-Type": "application/json",
      ...((options && options.headers) || {}),
    };
    const url = this.url(endpoint);
    return await this.http.delete<T, AxiosResponse<T, D>, D>(url, {
      ...options,
      headers,
    });
  };
}
