import { Block } from "../../../../utils/block";
import chatListMenu from "./chat-list-menu.hbs";
import { ChatListMenuProps } from "../../../../types";

export class ChatListMenu extends Block<ChatListMenuProps> {
    public constructor(tag: string, props: ChatListMenuProps, classname?: string) {
        super(tag, props, false, classname);
    }

    public render() {
        return this.compile(chatListMenu, {});
    }
}
