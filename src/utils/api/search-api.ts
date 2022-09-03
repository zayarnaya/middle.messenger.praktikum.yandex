import { BaseAPI } from "./base-api";
import { HTTPTransport } from "../http-transport";
import { apiPrefix } from "../../consts";

const searchAPIInstance = new HTTPTransport();
const searchAPIURL = `${apiPrefix}/user/search`;

type searchProps = {
  login: string;
};

export class SearchAPI extends BaseAPI {
  public request(data: searchProps) {
    return searchAPIInstance.post(`${searchAPIURL}`, {
      headers: undefined,
      method: undefined,
      timeout: 3000,
      data: data,
    });
  }
}
