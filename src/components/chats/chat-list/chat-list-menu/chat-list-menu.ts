import { Chat } from "../../chat";
import chatListMenu from "./chat-list-menu.hbs";

export class ChatListMenu extends Chat {
    constructor(tag: string, props: Record<string, any>, classname?: string) {
        super(tag, props, classname);
    }

    render() {
        return this.compile(chatListMenu, {});
    }
}
