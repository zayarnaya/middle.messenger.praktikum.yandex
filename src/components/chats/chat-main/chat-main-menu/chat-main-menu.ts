import { Chat } from "../../chat";
import chatMainMenu from "./chat-main-menu.hbs";

export class ChatsMenu extends Chat {
    constructor(props: Object, classname?: string) {
        super("nav", props, classname);
        this.events = {
            click: function () {
                document.querySelector("#open-menu").classList.toggle("hidden");
            }
        };

        this.eventTarget = "#mini-menu";
    }

    render() {
        return this.compile(chatMainMenu, this.props);
    }
}
