import { Block } from "../../../../../utils/block";
import chatMessageIn from "./chat-message-in.hbs";
import { ChatMessageProps } from "../../../../../types";
import "./chat-message-in.scss";

export class ChatMessageIn extends Block<ChatMessageProps, ChatMessageIn> {
  public constructor(props: ChatMessageProps, classname?: string) {
    super("li", props, false, classname);
  }

  public render() {
    return this.compile(chatMessageIn, this.props);
  }
}
