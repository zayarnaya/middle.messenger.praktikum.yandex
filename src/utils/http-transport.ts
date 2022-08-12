import { data } from "../data";
import { Methods, Options } from "./../consts";
import { queryStringify } from "./query-stringify";

export class HTTPTransport {
  get = (url: string, options: Options = {
    headers: undefined,
    method: Methods.GET,
    timeout: 5000
  }) => {
    return this.request(!!data
      ? `${url}${queryStringify(data)}` 
      : url, { ...options, method: Methods.GET }, options.timeout);
  };

  put = (url: string, options: Options = {
    headers: { 'Content-Type': 'application/json' },
    method: Methods.PUT,
    timeout: 5000
  }) => {
    return this.request(url, { ...options, method: Methods.PUT }, options.timeout);
  };

  post = (url: string, options: Options = {
    headers: { 'Content-Type': 'application/json' },
    method: Methods.POST,
    timeout: 5000
  }) => {
    return this.request(url, { ...options, method: Methods.POST }, options.timeout);
  };

  delete = (url: string, options: Options = {
    headers: undefined,
    method: Methods.DELETE,
    timeout: 5000
  }) => {
    return this.request(url, { ...options, method: Methods.DELETE }, options.timeout);
  };

  request = (url: string, options: Options, timeout = 5000) => {
    const { headers = {}, method, data } = options;
    return new Promise((resolve, reject) => {
      if (!method) {
        reject("no method!");
        return;
      }
      const xhr = new XMLHttpRequest();
      xhr.open(method, url,);

      Object.keys(headers).forEach(key => {
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
