import { Block } from "../../../../utils/block";
import chatListLayout from "./chat-list-layout.hbs";
import { ChatListLeftPanelProps } from "../../../../types";

export class ChatListLeftPanel extends Block<ChatListLeftPanelProps> {
    public constructor(tag: string, propsAndChildren: ChatListLeftPanelProps, classname?: string) {
        super(tag, propsAndChildren, false, classname);
    }

    public render() {
        return this.compile(chatListLayout, {});
    }
}
