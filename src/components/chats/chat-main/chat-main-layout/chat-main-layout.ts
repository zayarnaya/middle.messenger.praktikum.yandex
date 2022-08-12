import { Block } from "../../../../utils/block";
import chatMainLayout from "./chat-main-layout.hbs";
import { ChatRightPanelLayoutProps } from "../../../../types";

export class ChatRightPanelLayout extends Block<ChatRightPanelLayoutProps> {
    public constructor(tag: string, props:ChatRightPanelLayoutProps, classname?: string) {
        super(tag, props, false, classname);
    }

    public render() {
        return this.compile(chatMainLayout, this.props);
    }
}
