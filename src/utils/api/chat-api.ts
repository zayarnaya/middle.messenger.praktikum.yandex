import { HTTPTransport } from "../http-transport";
import { BaseAPI } from "./base-api";
import { apiPrefix } from "../../consts";


const chatAPIInstance = new HTTPTransport;
const chatAPIURL = `${apiPrefix}/chats/`;

export class ChatAPI extends BaseAPI {
    public create(data) {
        return chatAPIInstance.post(`${chatAPIURL}`, {
            headers: undefined,
            method: undefined,
            data: data
        });
    }

    public request() {
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
