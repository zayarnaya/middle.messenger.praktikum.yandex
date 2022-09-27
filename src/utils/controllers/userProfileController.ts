import { HTTPTransport } from "../http-transport";
import { APIurls } from "../../types";

const request = new HTTPTransport();

export class UserProfileController {
  public async changeProfile(data: {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
  }) {
    return request.put(APIurls.CHANGEPROFILE, { data: JSON.stringify(data) });
  }

  public async changePass(data: { oldPassword: string; newPassword: string }) {
    return request.put(APIurls.CHANGEPASS, { data: JSON.stringify(data) });
  }
}
