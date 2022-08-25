import { HTTPTransport } from "../http-transport";
import { BaseAPI } from "./base-api";
import { apiPrefix } from "../../consts";


const chatAPIInstance = new HTTPTransport;
const chatAPIURL = `${apiPrefix}/chats/`;

export class _ChatAPI extends BaseAPI {
    create() {
        return chatAPIInstance.post(`${chatAPIURL}`, {
            headers: undefined,
            method: undefined,
        });
    }

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
}
