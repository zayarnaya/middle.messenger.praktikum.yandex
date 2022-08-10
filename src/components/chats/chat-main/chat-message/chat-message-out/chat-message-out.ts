import { Chat } from "../../../chat";
import chatMessageOut from "./chat-message-out.hbs";

import "./chat-message-out.scss";

export class ChatMessageOut extends Chat {
    constructor(props: Object, classname?: string) {
        super("li", props, classname);
        this.props = props;
    }

    render() {
            return this.compile(chatMessageOut, this.props);
        }

    


}
