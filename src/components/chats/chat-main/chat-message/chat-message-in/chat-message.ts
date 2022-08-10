import { Chat } from "../../../chat";
import chatMessageIn from "./chat-message-in.hbs";

import "./chat-message-in.scss";

export class ChatMessageIn extends Chat {
    constructor(props, classname?: string) {
        super("li", props, classname);
        this.props = props;
        
    }
    render() {
       
            return this.compile(chatMessageIn, this.props);
                
        }


}
