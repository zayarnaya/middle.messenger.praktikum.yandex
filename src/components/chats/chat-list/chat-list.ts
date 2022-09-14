import { ChatListLeftPanel } from "./chat-list-layout/chat-list-layout";
import { ChatListMenu } from "./chat-list-menu/chat-list-menu";
import { ChatlistUserprofile } from "./chatlist_userprofile/chatlist-userprofile";
import { render } from "../../../utils/renderDOM";
import { ChatListItem } from "./chatlist-item/chatlist-item";
import { MultiList } from "../../multi-list/multi-list";
import "./../../../style.scss";
import store, { StoreEvents, StoreState } from "../../../utils/store";
import { isEmpty } from "../../../utils/minor-functions/isEmpty";
import { ChatsController } from "../../../utils/controllers/chatsController";
import { defaulAvatar, filePrefix } from "../../../consts";
import { ChatsProps } from "../../../APItypes";
import { isEqualArrays } from "../../../utils/minor-functions/isEqualArrays";
import { SearchForm } from "../../forms/form-search/form-search";
import { InputField } from "../../input/input-field";
import { Button } from "../../buttons/button-submit/button";

export function buildLeftPanel() {
  const getChats = new ChatsController();
  let storedChatList: ChatsProps[] = store.getState().chatlist as ChatsProps[];
  getChats.getChats().then((response: XMLHttpRequest) => {
    if (response.status == 200) {
      let adata = JSON.parse(response.response);
      store.setChatList("chatlist", adata);
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
              avatar: defaulAvatar,
              name: "Me",
              link: "/settings",
            },
            "chat-list__profile"
          ),
          formsearch: new SearchForm({
            input: new InputField({
              name: "search",
              type: "search",
              label: "Искать чат",
              placeholder: "Поиск"
            }),
            button: new Button({
              class: "search-submit-button",

            }),
            classname: "chat-list__search",
          })
        },
        "chat-list__menu"
      ),
      chatList: new ChatListItem({}),
    },
    "chat-list"
  );
  if(!!document.querySelector(".chat-list-wrapper")){
    render(".chat-list-wrapper", panel);
  }

  //store.on(StoreEvents.Updated, () => {
    store.on(StoreEvents.ChatListSet, () => {
    setTimeout(() => {
      let chats: ChatsProps[] = store.getState().chatlist as ChatsProps[];
      if (!!isEmpty(chats)) {
        return;
      } else if (
        !!storedChatList &&
        !!isEqualArrays(chats, storedChatList)
      ) {
        return;
      } else {
        let theChildren: Record<string, ChatListItem> = {};
        chats.forEach((chat, index) => {
          if (!isEmpty(chat.last_message)) {
            let timestamp: string = chat.last_message.time;
            theChildren[index] = new ChatListItem({
              profile: `/users/${chat.last_message.user.login}`,
              avatar: chat.avatar
                ? `${filePrefix}${chat.avatar}`
                : defaulAvatar,
              name: `${chat.last_message.user.first_name} ${chat.last_message.user.second_name}`,
              lastMessage: chat.last_message.content,
              timestamp: timestamp.slice(11, 16),
              unread: chat.unread_count,
              title: chat.title,
              chatID: chat.id,
            });
          } else if (!!isEmpty(chat.last_message)) {
            theChildren[index] = new ChatListItem({
              avatar: chat.avatar
                ? `${filePrefix}${chat.avatar}`
                : defaulAvatar,
              title: chat.title,
              unread: 0,
              chatID: chat.id,
            });
          }
        });
        let newList = new MultiList(
          theChildren,
          "ul",
          "chat-list__list_unmarked"
        );
        if (document.location.pathname.includes("messenger") && !!document.querySelector(".chat-list__list")) {
          render(".chat-list__list", newList);
        }

        const state: StoreState = store.getState();

        const active: number = state.initChat
          ? state.initChat.id
          : null;
        if (!!active) {
          const activeItem: HTMLElement = document.getElementById(`${active}`) as HTMLElement;
          if(!!activeItem) { 
            activeItem.classList.add("highlight");
          }
        }
      }
    }, 0);
  });
}
