import { Chat } from "../../../chat";
import chatMessageIn from "./chat-message-in.hbs";


import "./chat-message-in.scss";

export class ChatMessageIn extends Chat {
    constructor(props, classname?: string) {
        super("li", props, classname);
        
    }
    render() {
       
            return this.compile(chatMessageIn, {});
                
        }


}
