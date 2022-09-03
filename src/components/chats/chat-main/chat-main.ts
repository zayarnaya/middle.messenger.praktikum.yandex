import { ChatRightPanelLayout } from "./chat-main-layout/chat-main-layout";
import { Button } from "../../buttons/button-submit/button";
import { FormMessage } from "../../forms/form-message/form-message";
import { ChatsMenu } from "./chat-main-menu/chat-main-menu";
import { render } from "../../../utils/renderDOM";
import { InputField } from "../../input/input-field";
import { userSearchModal } from "./chat-main-modals/search";
import { createChatModal } from "./chat-main-modals/create";
import { MenuItem } from "./chat-main-menu/menu-items/menu-item";
import { MultiListProps } from "../../../types";
import { MultiList } from "../../multi-list/multi-list";
import {
  chatIDfromLocation,
  defaultChatAvatar,
  filePrefix,
} from "../../../consts";
import store, { StoreEvents } from "../../../utils/store";
import { modalUserRemove } from "./chat-main-modals/delete-user";
import { logOut } from "../../../utils/logout";
import { getChatList } from "../../../utils/getChatList";
import { getChatUsers } from "../../../utils/getChatUsers";
import { getToken } from "../../../utils/getToken";
import { getOldMessages } from "../../../utils/getOldMessages";
import { ChatsProps } from "../../../APItypes";
import { changeChatAvatarModal } from "./chat-main-modals/avatar";

export function buildRightPanel() {
  const chatID = chatIDfromLocation();
  getChatList();
  if (document.location.pathname.includes("/chats/")) {
    getChatUsers(chatID);
    getToken(chatID);
  }
  let oldMsgCounter: number = 0;

  const createChat = new MenuItem({
    text: "Создать чат",
    id: "new-chat",
    events: {
      click: () => createChatModal(),
    },
  });

  const changeAvatar = new MenuItem({
    text: "Поменять аватарку",
    id: "change-avatar",
    events: {
      click: () => changeChatAvatarModal(),
    },
  });

  const inviteUser = new MenuItem({
    text: "Позвать друга в чат",
    id: "call-to-chat",
    events: {
      click: () => userSearchModal(),
    },
  });

  const deleteUser = new MenuItem({
    text: "Удалить друга из чата",
    id: "del-from-chat",
    events: {
      click: () => modalUserRemove(),
    },
  });

  const deleteChat = new MenuItem({
    text: "Удалить чат",
    id: "delete-chat",
    classname: "color-red",
    events: {
      click: () => alert("ПОКА НЕ МОЖЕМ"),
    },
  });

  const chatMenuItems: MenuItem[] = [
    createChat,
    changeAvatar,
    inviteUser,
    deleteUser,
    deleteChat,
  ];

  let chatMenuChildren: MultiListProps = {};

  chatMenuItems.forEach(function (elem, index) {
    chatMenuChildren[index] = elem;
  });

  const logout = new MenuItem({
    text: "Выйти",
    id: "logout",
    classname: "color-red",
    events: {
      click: () => logOut(),
    },
  });

  const actionsMenuItems: MenuItem[] = [logout];

  let actionsMenuChildren: MultiListProps = {};

  actionsMenuItems.forEach(function (elem, index) {
    actionsMenuChildren[index] = elem;
  });

  const mainmenu = new ChatsMenu(
    {
      chatavatar: "",
      chatname: "",
      chatMenu: new MultiList(chatMenuChildren, "ul", ""),
      actionsMenu: new MultiList(actionsMenuChildren, "ul", ""),
    },
    "chat-main__menu"
  );

  const panel = new ChatRightPanelLayout(
    "div",
    {
      mainmenu: mainmenu,

      messagefield: new FormMessage(
        {
          button: new Button({
            type: "submit",
            class: "chat-main__message-button",
          }),
          input: new InputField({
            type: "text",
            name: "message",
            placeholder: "Сообщение",
          }),
        },
        "chat-main__message-field"
      ),
    },
    "chat-main"
  );

  render(".chat-main-wrapper", panel);

  store.on(StoreEvents.Updated, () => {
    //добавляем название чата и аватарку в меню
    let chat: ChatsProps = store.getState().chat as ChatsProps;
    let this_chat: {
      id: number;
      token: string;
    } = store.getState().this_chat as {
      id: number;
      token: string;
    };
    let avatar: string = "";
    if (!!chat && !!chat.avatar && chat.avatar != "null") {
      avatar = `${filePrefix}${chat.avatar}`;
    } else {
      avatar = defaultChatAvatar;
    }
    mainmenu.setProps({
      chatavatar: avatar,
      chatname: chat ? (chat.title as string) : "Чат",
    });

    //формируем список старых сообщений
    if (!this_chat) {
      return;
    }
    if (this_chat.id == chatID && !!this_chat.token) {
      if (oldMsgCounter == 0) {
        getOldMessages(chatID, this_chat.token);
        oldMsgCounter += 1;
      }
    }
  });
}
