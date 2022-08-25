import { HTTPTransport } from "../http-transport";
import { BaseAPI } from "./base-api";
import { apiPrefix } from "../../consts";


const userProfileAPIInstance = new HTTPTransport;
//const changeAPIURL = `${apiPrefix}/user/`;
const userAPIURL = `${apiPrefix}/auth/`

export class UserProfileAPI extends BaseAPI {
    create() {
        return userProfileAPIInstance.get(`${userAPIURL}user`, {
            headers: undefined,
            method: undefined,
        });
    }
/*
    request() {
        return chatAPIInstance.get(`${chatAPIURL}full`, {
            headers: undefined,
            method: undefined,
            timeout: 3000,
            data: {
                title: "string",
            }
        });
    }
    */

}
