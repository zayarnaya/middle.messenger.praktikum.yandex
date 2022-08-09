import { Chat } from "../../../chat";
import chatMessageOut from "./chat-message-out.hbs";


import "./chat-message-out.scss";

export class ChatMessageOut extends Chat {
    constructor(props, classname?: string) {
        super("li", props, classname);
    }

    render() {
            return this.compile(chatMessageOut, {});
        }

    


}
