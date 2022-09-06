import XMLHttpRequest from "xhr2";
import { Methods, Options } from "./../types";
import { queryStringify } from "./query-stringify";

export class HTTPTransport {
  get = (url: string, options: Options) => {
    return this.request(
      !!options.data ? `${url}${queryStringify(options.data)}` : url,
      { ...options, method: Methods.GET },
      options.timeout
    );
  };

  put = (url: string, options: Options) => {
    return this.request(
      url,
      {
        ...options,
        headers: { "Content-Type": "application/json" },
        method: Methods.PUT,
      },
      options.timeout
    );
  };

  file = (url: string, options: Options) => {
    return this.request(
      url,
      {
        ...options,
        method: Methods.PUT,
      },
      10000
    );
  };

  post = (url: string, options: Options) => {
    return this.request(
      url,
      {
        ...options,
        headers: { "Content-Type": "application/json" },
        method: Methods.POST,
      },
      options.timeout
    );
  };

  delete = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, 
        headers: { "Content-Type": "application/json" },
        method: Methods.DELETE },
      options.timeout
    );
  };

  request = (url: string, options: Options, timeout: number = 1000) => {

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

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.timeout = timeout;
      xhr.withCredentials = true;

      if (!data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
