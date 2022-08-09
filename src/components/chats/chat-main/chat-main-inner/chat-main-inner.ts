import chatMainInner from "./chat-main-inner.hbs";
import { Chat } from "../../chat";

export class ChatsInnerField extends Chat {
    constructor(tag: string, props, classname?: string) {
        super(tag, props, classname);
    }

    render() {
        return this.compile(chatMainInner, {});
    }
}
