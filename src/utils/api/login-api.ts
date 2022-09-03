import { BaseAPI } from "./base-api";
import { HTTPTransport } from "../http-transport";
import { apiPrefix } from "../../consts";

const authAPIInstance = new HTTPTransport();
const authAPIURL = `${apiPrefix}/auth`;

type loginProps = {
  login: string;
  password: string;
};

export class LoginAPI extends BaseAPI {
  public request(data: loginProps) {
    return authAPIInstance.post(`${authAPIURL}/signin`, {
      headers: undefined,
      method: undefined,
      timeout: 3000,
      data: data,
    });
  }
}
