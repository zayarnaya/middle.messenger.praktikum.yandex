import { Login } from "../../APItypes";
import { APIurls } from "../../types";
import { HTTPTransport } from "../http-transport";

const request = new HTTPTransport();

export class OtherUsersController {
  public async seek(data: Login) {
    try {
      return request.post(APIurls.SEEKUSER, { data: JSON.stringify(data) });
    } catch (error) {
      return;
    }
  }
}
