import { Block } from "../../../../../utils/block";
import chatMessageOut from "./chat-message-out.hbs";
import { ChatMessageProps } from "../../../../../types";
import "./chat-message-out.scss";

export class ChatMessageOut extends Block<ChatMessageProps, ChatMessageOut> {
    public constructor(props: ChatMessageProps, classname?: string) {
        super("li", props, false, classname);
    }

    public render() {
        return this.compile(chatMessageOut, this.props);
    }
}
