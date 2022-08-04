import { METHODS, Options } from "./../consts";
import { queryStringify } from "./query-stringify";

export class HTTPTransport {
    get = (url: string, options: Options = {
        headers: undefined,
        method: METHODS.GET,
        timeout: 5000
    }) => {             
            return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };

      put = (url : string, options: Options = {
          headers: {'Content-Type': 'application/json'},
          method: METHODS.PUT,
          timeout: 5000
      }) => {             
            return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

      post = (url: string, options: Options = {
          headers: {'Content-Type': 'application/json'},
          method: METHODS.POST,
          timeout: 5000
      }) => {             
            return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

      delete = (url: string, options: Options = {
          headers: undefined,
          method: METHODS.DELETE,
          timeout: 5000
      }) => {             
            return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    request = (url: string, options: Options, timeout = 5000) => {
                const {headers= {}, method, data} = options;
                return new Promise((resolve, reject) => {
                  if(!method) {
                    reject("no method!");
                    return;
                  }
                const xhr = new XMLHttpRequest();
                const getIt = method === METHODS.GET;
                xhr.open( method, getIt && !!data
                                    ? `${url}${queryStringify(data)}`
                                    : url,);
                
                Object.keys(headers).forEach(key => {
                    xhr.setRequestHeader(key, headers[key]);
                });
                xhr.timeout = timeout;  
                xhr.onload = function() {
                  resolve(xhr);
                };

                xhr.onabort = reject;
                xhr.onerror = reject;
                xhr.ontimeout = reject;

                if (getIt || !data) {
                  xhr.send();
                } else {
                  xhr.send(data);
                }
              });
    };
}
