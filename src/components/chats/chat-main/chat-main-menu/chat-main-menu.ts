import { Chat } from "../../chat";
import chatMainMenu from "./chat-main-menu.hbs";

export class ChatsMenu extends Chat {
    constructor(props, classname?: string) {
        super("nav", props, classname);
        this.props = props;
    }

    render() {
        return this.compile(chatMainMenu, this.props);
    }
}
