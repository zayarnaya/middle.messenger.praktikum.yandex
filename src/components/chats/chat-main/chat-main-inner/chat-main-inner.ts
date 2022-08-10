import chatMainInner from "./chat-main-inner.hbs";
import { Chat } from "../../chat";

export class ChatsInnerField extends Chat {
    constructor(tag: string, props: Record<string, any>, classname?: string) {
        super(tag, props, classname);
        this.props = props;
    }

    render() {
        return this.compile(chatMainInner, this.props);
    }
}
