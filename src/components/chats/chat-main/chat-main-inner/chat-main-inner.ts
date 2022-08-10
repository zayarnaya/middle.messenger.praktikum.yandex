import chatMainInner from "./chat-main-inner.hbs";
import { Chat } from "../../chat";

export class ChatsInnerField extends Chat {
    constructor(tag: string, props, classname?: string) {
        super(tag, props, classname);
        this.props = props;
    }

    render() {
        console.log(this, "INNER FIELD");
        return this.compile(chatMainInner, this.props);
    }
}
