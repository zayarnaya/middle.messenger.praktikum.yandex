import { BaseAPI } from "./base-api";
import { HTTPTransport } from "../http-transport";
import { apiPrefix } from "../../consts";

const signAPIInstance = new HTTPTransport();
const signAPIURL = `${apiPrefix}/auth`;

export class SigninAPI extends BaseAPI {
  public request(data: any) {
    return signAPIInstance.post(`${signAPIURL}/signup`, {
      data: data,
    });
  }
}
