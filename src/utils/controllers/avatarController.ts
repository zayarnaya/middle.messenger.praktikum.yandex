import { APIurls } from "../../types";
import { HTTPTransport } from "../http-transport";

const request = new HTTPTransport();

export class AvatarController {
  public async change(data: FormData) {
    return request.file(APIurls.CHANGEAVATAR, { data });
  }
}
