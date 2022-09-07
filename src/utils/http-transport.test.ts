import { HTTPTransport } from "./http-transport";

const request = new HTTPTransport();
//Используется fake API jsonplaceholder
const prefix = "https://jsonplaceholder.typicode.com/posts";

describe("HTTPTransport", () => {
  it("GET-запрос", (done) => {
    request
      .get(
        `${prefix}/1`,
        {},
      )
      .then(({ response }) => {
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
      .then(({ response }) => {
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
      .then(({ response }) => {
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
      .then(({ response }) => {
        if(!!response) {
          done();
        } else {
          done("Должен был быть ответ");
        }
      })
      .catch(done);
  });

});


