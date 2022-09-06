import { ChatRightPanelLayout } from "./chat-main-layout/chat-main-layout";
import { Button } from "../../buttons/button-submit/button";
import { FormMessage } from "../../forms/form-message/form-message";
import { ChatsMenu } from "./chat-main-menu/chat-main-menu";
import { render } from "../../../utils/renderDOM";
import { InputField } from "../../input/input-field";
import { userSearchModal } from "./chat-main-modals/search";
import { createChatModal } from "./chat-main-modals/create";
import { deleteChatModal } from "./chat-main-modals/delete";
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
import { isEqualArrays } from "../../../utils/minor-functions/isEqualArrays";

export function buildRightPanel() {
  const loc = document.location.pathname;
  const chatID = chatIDfromLocation();
  // if(!!chatID) {
  // getChatList();
  // getChatUsers(chatID);
  // getToken(chatID);
  // }


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
      click: () => deleteChatModal(),
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
      chatavatar: defaultChatAvatar,
      chatname: "Выберите чат",
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
    const newID = chatIDfromLocation();
    const chatList: any[] = store.getState().chatlist as any[];
    if(!!chatList) {
    let chatIDlist: number[] = [];
    chatList.forEach(chat => {
      chatIDlist.push(Number(chat.id));
    });
    if(loc.includes("/messenger/") && !chatIDlist.includes(newID)) {
      document.querySelector(".chat-main__inner").textContent = "Такого чата нет!";
    }
  }
    if(!newID) {
      mainmenu.setProps({
      chatavatar: defaultChatAvatar,
      chatname: "Выберите чат"
    });
    } else {
      const state = store.getState();
      if(!state.chat || !state.thisChat) {
        return;
      }

     // добавляем название чата и аватарку в меню
    let chat: ChatsProps = store.getState().chat as ChatsProps;
    let thisChat: {
      id: number;
      token: string;
    } = store.getState().thisChat as {
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
      chatavatar: newID
      ? avatar
      : defaultChatAvatar,
      chatname: chat ? (chat.title as string) : "Выберите чат",
    });

    //формируем список старых сообщений
    if(thisChat.id != newID) {
      const innerField: HTMLElement = document.querySelector(".chat-main__inner") as HTMLElement;
      innerField.textContent = ""; //сбрасываем сообщения
    }
    const chatsmsg = `chat${newID}_messages`;
    const oldMsg = store.getState()[chatsmsg];
    console.log(oldMsg, "ОЛДОВЫЕ");

    if (thisChat.id == newID && !!thisChat.token && !!localStorage.getItem("user_id")) {
        getOldMessages(thisChat.id, thisChat.token);
          }
    // if (thisChat.id == newID && !!thisChat.token && !!localStorage.getItem("user_id") 
    // && !store.getState().gotOld) {
    //     getOldMessages(thisChat.id, thisChat.token);
    //     store.set("gotOld", {
    //       id: thisChat.id,
    //       gotOld: true
    //     });

    // }


    }
  });

  // store.on(StoreEvents.Updated, () => {
  //   const initChat: {
  //     id: number | string
  //   } | undefined = store.getState().initChat
  //   ? store.getState().initChat
  //   : undefined;
  //   const newID = chatIDfromLocation();
  //   if(!!initChat && initChat.id == chatIDfromLocation()) {
  //     console.log("чатинит и локейшн одинаковые");
  //     getChatUsers(newID);
  //     getToken(newID);
  //     buildRightPanel();
  //     store.set("initChat", undefined);
  //   } else if (!initChat){
  //   //добавляем название чата и аватарку в меню
  //   let chat: ChatsProps = store.getState().chat as ChatsProps;
  //   let thisChat: {
  //     id: number;
  //     token: string;
  //   } = store.getState().thisChat as {
  //     id: number;
  //     token: string;
  //   };
  //   let avatar: string = "";
  //   if (!!chat && !!chat.avatar && chat.avatar != null) {
  //     avatar = `${filePrefix}${chat.avatar}`;
  //   } else {
  //     avatar = defaultChatAvatar;
  //   }
  //   mainmenu.setProps({
  //     chatavatar: newID
  //     ? avatar
  //     : defaultChatAvatar,
  //     chatname: chat ? (chat.title as string) : "Выберите чат",
  //   });

  //   //формируем список старых сообщений
  //   if (!thisChat) {
  //     return;
  //   }
  //   if(chatID != newID) {
  //     console.log("РАЗНЫЕ");
  //     const innerField: HTMLElement = document.querySelector(".chat-main__inner") as HTMLElement;
  //     innerField.textContent = "Выберите чат и начинайте общаться!";
  //   }
  //   if (thisChat.id == newID && !!thisChat.token) {
  //     if (oldMsgCounter == 0) {
  //       getOldMessages(newID, thisChat.token);
  //       oldMsgCounter += 1;
  //     }
  //   }
  // }
  // });

}
