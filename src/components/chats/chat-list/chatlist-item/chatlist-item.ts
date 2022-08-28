import { Block } from "../../../../utils/block";
import chatListItem from "./chatlist-item.hbs";
import { ChatListItemProps } from "../../../../types";
import { router } from "../../../../consts";
import { chatsPage } from "../..";
import store from "../../../../utils/store";
import { pageRouter } from "../../../../utils/render";

export class ChatListItem extends Block<ChatListItemProps, ChatListItem> {
  public constructor(propsAndChildren: ChatListItemProps) {
    super("li", propsAndChildren);
    if(!!propsAndChildren.chatID){
    this.events = {
      click: function () {
        console.log(this);
        let id = this.id;
        let chatFrame: HTMLElement = document.querySelector(".chat-main__inner") as HTMLElement; 
        let active = document.querySelector(".highlight");
        if (this == active) {
          return;

        } else if (!!active) {
          active.classList.remove("highlight");
          this.classList.add("highlight");
          //document.location.pathname = `/chats/${id}`;
          //router.go(`/chats/${id}`);
          //router.go(`/chats/${id}`);
          //router.use(`/chats/${id}`, chatsPage());
          //store.set("chats", `/chats/${id}`);
          router.go(`/chats/${id}`);

          
        } else if (!active) {
          this.classList.add("highlight");
          //document.location.pathname = `/chats/${id}`; 
          //router.go(`/chats/${id}`);
          //router.go(`/chats/${id}`);
          //router.use(`/chats/${id}`, chatsPage());
          //store.set("chats", `/chats/${id}`);
          router.go(`/chats/${id}`);
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
