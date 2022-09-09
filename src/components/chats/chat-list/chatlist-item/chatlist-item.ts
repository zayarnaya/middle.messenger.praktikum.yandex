import { Block } from "../../../../utils/block";
import chatListItem from "./chatlist-item.hbs";
import { ChatListItemProps } from "../../../../types";
import { router } from "../../../../consts";
import store from "../../../../utils/store";
import { getChatList } from "../../../../utils/getChatList";
import { getChatUsers } from "../../../../utils/getChatUsers";
import { getToken } from "../../../../utils/getToken";
import { chatsPage } from "../..";

export class ChatListItem extends Block<ChatListItem> {
  public constructor(propsAndChildren: ChatListItemProps) {
    super("li", propsAndChildren);
    if (!!propsAndChildren.chatID) {
      this.events = {
        click: function (e: Event) {
          e.preventDefault();
          let id = this.id;
          let active = document.querySelector(".highlight");

          if (!active) {
            this.classList.add("highlight");
            router.use(`/messenger/#${id}`, chatsPage).go(`/messenger/#${id}`);
            getChatList();
            getChatUsers(id);
            getToken(id);

            store.set("initChat", { id: id });
          } else if (!!active && this != active) {
            active.classList.remove("highlight");
            this.classList.add("highlight");
            router.use(`/messenger/#${id}`, chatsPage).go(`/messenger/#${id}`);
            getChatList();
            getChatUsers(id);
            getToken(id);

            store.set("initChat", { id: id });
          } else if (this == active) {
            return;
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
