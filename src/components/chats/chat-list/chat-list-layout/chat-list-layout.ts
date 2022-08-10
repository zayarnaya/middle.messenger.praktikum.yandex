import { Chat } from "../../chat";
import chatListLayout from "./chat-list-layout.hbs";

export class ChatListLeftPanel extends Chat {
    constructor(tag: string, propsAndChildren: Record<string, any>, classname?: string) {
        super(tag, propsAndChildren, classname);
    }

    render() {
        return this.compile(chatListLayout, {});
    }
}
