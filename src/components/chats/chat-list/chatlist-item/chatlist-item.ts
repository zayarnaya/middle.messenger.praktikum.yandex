import { Block } from "../../../../utils/block";
import chatListItem from "./chatlist-item.hbs";
import { ChatListItemProps } from "../../../../types";

export class ChatListItem extends Block<ChatListItemProps, ChatListItem> {
    public constructor(propsAndChildren: ChatListItemProps) {
        super("li", propsAndChildren);
        this.events = {
            click: function () {
                let active = document.querySelector(".highlight");

                if (this == active) {
                    return;

                } else if (!!active) {
                    active.classList.remove
                        ("highlight");
                    this.classList.add("highlight");

                } else if (!active) {
                    this.classList.add("highlight");
                }

            }
        };
        this.eventTarget = ".chat-list-item";
    }

    public render() {
        return this.compile(chatListItem, this.props);
    }
}
