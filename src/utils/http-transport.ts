import { data } from "../data";
import { Methods, Options } from "./../types";
import { queryStringify } from "./query-stringify";

export class HTTPTransport {
  get = (
    url: string,
    options: Options = {
      headers: undefined,
      method: Methods.GET,
    },
    timeout: number =  5000,
  ) => {
    return this.request(
      !!data ? `${url}${queryStringify(data)}` : url,
      { ...options, method: Methods.GET },
      timeout
    );
  };

  put = (
    url: string,
    options: Options = {
      headers: { "Content-Type": "application/json" },
      method: Methods.PUT,
    },
    timeout: number =  5000,
  ) => {
    return this.request(
      url,
      { ...options, method: Methods.PUT },
      timeout
    );
  };

  post = (
    url: string,
    options: Options = {
      headers: { "Content-Type": "application/json" },
      method: Methods.POST,      
    },
    timeout: number =  5000,
  ) => {
    return this.request(
      url,
      { ...options, method: Methods.POST },
      timeout
    );
  };

  delete = (
    url: string,
    options: Options = {
      headers: undefined,
      method: Methods.DELETE,
    },
    timeout: number = 5000
  ) => {
    return this.request(
      url,
      { ...options, method: Methods.DELETE },
      timeout
    );
  };

  request = (url: string, options: Options, timeout: number = 5000) => {
    const { headers = {}, method, data } = options;
    return new Promise((resolve, reject) => {
      if (!method) {
        reject("no method!");
        return;
      }
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });
      xhr.timeout = timeout;
      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (!data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
