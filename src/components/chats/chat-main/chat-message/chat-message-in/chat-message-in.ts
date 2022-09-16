import { ChatMessageProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";
import makeIncomingMessage from "./chat-message-in.hbs";

export class IncomingMessage extends Block<IncomingMessage> {
    public constructor(props: ChatMessageProps) {
        super("div", props, false, "message-in-outer col");
       
    }

    public render() {
        return this.compile(makeIncomingMessage, this.props);
      }
}
