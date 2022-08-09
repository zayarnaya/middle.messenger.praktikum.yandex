import { Chat } from "../../chat";
import chatListLayout from "./chat-list-layout.hbs";
import { data } from "../../../../data";

export class ChatListLeftPanel extends Chat {
    constructor(tag: string, propsAndChildren) {
        super(tag, propsAndChildren);
    }

    render() {

        return this.compile(chatListLayout, {});
    }
}
