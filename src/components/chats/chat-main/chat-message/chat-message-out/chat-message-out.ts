import { ChatMessageProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";
import makeOutgoingMessage from "./chat-message-out.hbs";
import "./chat-message-out.scss";

export class OutgoingMessage extends Block<OutgoingMessage> {
    public constructor(props: ChatMessageProps) {
        super("div", props, false, "message-out-outer col");
       
    }

    public render() {
        return this.compile(makeOutgoingMessage, this.props);
      }
}
