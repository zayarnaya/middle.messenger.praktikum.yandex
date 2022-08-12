import { Block } from "../../../../utils/block";
import chatMainMenu from "./chat-main-menu.hbs";
import { ChatsMenuProps } from "../../../../types";

export class ChatsMenu extends Block<ChatsMenuProps> {
    public constructor(props: ChatsMenuProps, classname?: string) {
        super("nav", props, false, classname);
        this.events = {
            click: function () {
                document.querySelector("#open-menu").classList.toggle("hidden");
            }
        };

        this.eventTarget = "#mini-menu";
    }

    public render() {
        return this.compile(chatMainMenu, this.props);
    }
}
