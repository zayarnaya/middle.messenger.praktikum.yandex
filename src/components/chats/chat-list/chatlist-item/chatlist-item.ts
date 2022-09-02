import { Block } from "../../../../utils/block";
import chatListItem from "./chatlist-item.hbs";
import { ChatListItemProps } from "../../../../types";

export class ChatListItem extends Block<ChatListItem> {
  public constructor(propsAndChildren: ChatListItemProps) {
    super("li", propsAndChildren);
    if (!!propsAndChildren.chatID) {
      this.events = {
        click: function () {
          console.log(this);
          let id = this.id;
          let active = document.querySelector(".highlight");

          if (this == active) {
            return;
          } else if (!!active) {
            active.classList.remove("highlight");
            this.classList.add("highlight");
            document.location.pathname = `/chats/${id}`;
          } else if (!active) {
            this.classList.add("highlight");
            document.location.pathname = `/chats/${id}`;
          }
        },
      };
      this.eventTarget = ".chat-list-item";
    }
  }

  public render() {
    return this.compile(chatListItem, this.props);
  }
}
