import { HTTPTransport } from "./http-transport";

const request = new HTTPTransport();
const prefix = "https://ya-praktikum.tech/api/v2";

describe("HTTPTransport", () => {
  it("Авторизация", (done) => {
    let rawData = {
      login: "kooper",
      password: "asdfGH67",
    };
    let json = JSON.stringify(rawData);
    request
      .post(`${prefix}/auth/signin`, { data: json })
      .then(({ response }) => {
        if ((response = "OK")) {
          done();
        } else {
          done(new Error("Должно быть OK, а получили " + response));
        }
      })
      .catch(done);
  });

  it("Logout", (done) => {
    request
      .post(`${prefix}/auth/logout`, {})
      .then(({ response }) => {
        if ((response = "OK")) {
          done();
        } else {
          done(new Error("Должно быть OK, а получили " + response));
        }
      })
      .catch(done);
  });
});
