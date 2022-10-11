import Axios from 'axios-observable';
import type { Observable } from 'rxjs';

class HttpClient {
  constructor() {
    Axios.interceptors.response.use(
      (config) => {
        return config.data;
      },
      (error) => {
        return Promise.reject(error.response);
      }
    );
  }

  delete<T>(url: string, body?: any, headers?: any) {
    return this.request<T>('delete', url, body, headers);
  }

  get<T>(url: string, body?: any) {
    return this.request<T>('get', url, body);
  }

  patch<T>(url: string, body: any, headers?: any) {
    return this.request<T>('patch', url, body, headers);
  }

  post<T>(url: string, body: any, headers?: any) {
    return this.request<T>('post', url, body, headers);
  }

  put<T>(url: string, body: any, headers?: any) {
    return this.request<T>('put', url, body, headers);
  }

  private request<T>(method: string, url: string, data?: any, headers?: any): Observable<T> {
    // @ts-ignore
    return Axios.request<T>({
      method,
      url,
      data,
      headers,
    });
  }
}

export const http = new HttpClient();
