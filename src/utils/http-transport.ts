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

  post = (url: string, options: Options) => {
//console.log("POST");
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
      { ...options, method: Methods.DELETE },
      options.timeout
    );
  };

  /*
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
  
    */

  request = (url: string, options: Options, timeout: number = 5000) => {
    //console.log("REQUEST");
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

      /*
      if (xhr.status != 200) {
        // обработать ошибку
        console.log( xhr.status, xhr.statusText ); // пример вывода: 404: Not Found
      } else {
        // вывести результат
        console.log( xhr.responseText ); // responseText -- текст ответа.
      }
      */

    });
  };
}
