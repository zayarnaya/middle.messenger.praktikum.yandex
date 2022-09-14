import XMLHttpRequest from "xhr2";
import { Methods } from "../types";

class HTTPTransport {
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


const request = new HTTPTransport();
const prefix = "https://jsonplaceholder.typicode.com/posts";

describe("HTTPTransport", () => {
  it("GET-запрос", (done) => {
    request
      .get(
        `${prefix}/1`,
        {},
      )//проверить работает ли или надо response.response
      .then((response: XMLHttpRequest) => {
        let id = JSON.parse(response).id || null;
        if (id === 1) {
          done();
        } else {
          done("Должно быть 1");
        }
      })
      .catch(done);
  });

  it("POST-запрос", (done) => {
    request
      .post(
        prefix,
        { data: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 100,
          id: 101
        })},
      )
      .then((response: XMLHttpRequest) => {
        let id = JSON.parse(response).userId || null;
        if (id === 100) {
          done();
        } else {
          done("Должно быть 100");
        }
      })
      .catch(done);
  });

  it("PUT-запрос", (done) => {
    request
      .put(
        `${prefix}/1`,
        { data: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 102,
        })},
      )
      .then((response: XMLHttpRequest) => {
        let id = JSON.parse(response).userId || null;
        if (id === 102) {
          done();
        } else {
          done("Должно быть 102");
        }
      })
      .catch(done);
  });

  it("DELETE-запрос", (done) => {
    request
      .put(
        `${prefix}/1`,
        {},
      )
      .then((response: XMLHttpRequest) => {
        if(!!response) {
          done();
        } else {
          done("Должен был быть ответ");
        }
      })
      .catch(done);
  });

});
