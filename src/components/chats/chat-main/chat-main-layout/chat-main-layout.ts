import { Chat } from "../../chat";
import { data } from "../../../../data";
import chatMainLayout from "./chat-main-layout.hbs";

export class ChatRightPanelLayout extends Chat {
    constructor(tag: string, props, classname?: string) {
        super(tag, props, classname);
        this.props = props;
    }

    render() {
        return this.compile(chatMainLayout, this.props);
    }
}