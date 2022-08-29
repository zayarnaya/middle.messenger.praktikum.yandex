import { SearchForm } from "../../forms/form-search/form-search";
import { data } from "../../../data";
import { ChatListLeftPanel } from "./chat-list-layout/chat-list-layout";
import { ChatListMenu } from "./chat-list-menu/chat-list-menu";
import { ChatlistUserprofile } from "./chatlist_userprofile/chatlist-userprofile";
import { render } from "../../../utils/renderDOM";
import { InputField } from "../../input/input-field";
import { Button } from "../../buttons/button-submit/button";
import { ChatListItem } from "./chatlist-item/chatlist-item";
import { MultiList } from "../../multi-list/multi-list";
import { APIurls, ChatListItemProps, MultiListProps } from "../../../types";
import "./../../../style.scss";
import { UniversalController } from "../../../utils/controllers/userAuthController";
import store, { StoreEvents } from "../../../utils/store";
import { ChatController } from "../../../utils/controllers/chatController";
import { isEmpty } from "../../../utils/minor-functions/isEmpty";
import { Block } from "../../../utils/block";
import { ChatsController } from "../../../utils/controllers/chatsController";
import { HTTPTransport } from "../../../utils/http-transport";
import { defaulAvatar, filePrefix } from "../../../consts";

export function buildLeftPanel() {
  const getChats = new ChatsController;
  getChats.getChats(0, 10)
          .then(response => {
            if(response.status == 200) {
            let adata = JSON.parse(response.response);
            console.log(adata, "ДЖЕЙСОН чаты");
            store.set("chatlist", adata);
            console.log(response.response, response.status, "ЧАТЛИЧТ");
            } else {
              console.log(response.response, response.status);
            }
          });

  const panel = new ChatListLeftPanel(
    "div",
    {
      chatListMenu: new ChatListMenu(
        "nav",
        {
          chatuserprofile: new ChatlistUserprofile(
            "div",
            {
              avatar: data.user.avatar,
              name: data.user.profile.display_name.value,
              link: data.user.link,
            },
            "chat-list__profile"
          ),

          formsearch: new SearchForm({
            input: new InputField({
              type: "search",
              placeholder: "Поиск",
              name: "search"
            }),
            button: new Button({
              class: "chat-list__searchform-button",
            }),
          }),
        },
        "chat-list__menu"
      ),
      chatList: new ChatListItem({

      })
    },
    "chat-list"
  );

  render(".chat-list-wrapper", panel);

  store.on(StoreEvents.Updated, () => {

   setTimeout(() => {
    let chats = store.getState().chatlist;
    if(!!isEmpty(chats)) {
      return;
    }

    let theChildren: Record<string, ChatListItem> = {};

    chats.forEach((chat, index) => {
      if(!isEmpty(chat.last_message)) {
        let timestamp: string = chat.last_message.time;
      theChildren[index] = new ChatListItem( {
        profile: `/users/${chat.last_message.user.login}`,
        avatar: chat.avatar
        ? `${filePrefix}${chat.avatar}`
        : defaulAvatar,
        name: `${chat.last_message.user.first_name} ${chat.last_message.user.second_name}`,
        lastMessage: chat.last_message.content,
        timestamp: timestamp.slice(11, 16),
        unread: chat.unread_count,
        title: chat.title,
        chatID: chat.id
      })
    
  } else if (!!isEmpty(chat.last_message)) {
    theChildren[index] = new ChatListItem( {
      avatar: chat.avatar,
      title: chat.title,
      unread: 0,
      chatID: chat.id
    });

  }
    });
    let newList = new MultiList(theChildren, "ul", "chat-list__list_unmarked");
    render(".chat-list__list", newList);
  }, 0);
    });
}
