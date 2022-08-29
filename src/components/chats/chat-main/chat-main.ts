import { ChatRightPanelLayout } from "./chat-main-layout/chat-main-layout";
import { Button } from "../../buttons/button-submit/button";
import { FormMessage } from "../../forms/form-message/form-message";
import { ChatsMenu } from "./chat-main-menu/chat-main-menu";
import { ChatMessageIn } from "./chat-message/chat-message-in/chat-message-in";
import { ChatMessageOut } from "./chat-message/chat-message-out/chat-message-out";
import { ChatsInnerField } from "./chat-main-inner/chat-main-inner";
import { data } from "../../../data";
import { render } from "../../../utils/renderDOM";
import { InputField } from "../../input/input-field";
import { userSearchModal } from "./chat-main-modals/search";
import { createChatModal } from "./chat-main-modals/create";
import { loadChat } from "../../../utils/gotoChat";
import { HTTPTransport } from "../../../utils/http-transport";
import chatMessageOut from "./chat-message/chat-message-out/chat-message-out.hbs";
import { MenuItem } from "./chat-main-menu/menu-items/menu-item";
import { UserAuthController } from "../../../utils/controllers/userAuthController";
import { MultiListProps } from "../../../types";
import { MultiList } from "../../multi-list/multi-list";
import { chatIDfromLocation, defaultChatAvatar, filePrefix } from "../../../consts";
import store, { StoreEvents } from "../../../utils/store";
import { ChatsController } from "../../../utils/controllers/chatsController";
import { isEmpty } from "../../../utils/minor-functions/isEmpty";
import { deleteUserModal, modalUserRemove } from "./chat-main-modals/delete-user";
import { createChatModals } from "./chat-main-modals/delete-user/index copy";

export function buildRightPanel() {
  console.log("ФУНКЦИЯ ПОШЛА ЗАНОВО")

  const chatID = chatIDfromLocation(); //оно тут нужно?
  console.log("чат ид");

  const getChats = new ChatsController;
  getChats.getChats(0, 10)
          .then(response => {
            if(response.status == 200) {
            let adata = JSON.parse(response.response);
            let bdata = {};
            adata.forEach(data => {
              if(data.id == chatID) {
                Object.assign(bdata, data);
              }
            });
            store.set("thischat", bdata);
            console.log(response.response, response.status);
            } else {
              console.log(response.response, response.status);
            }
          });

  
  store.on(StoreEvents.Updated, () => {
    let chat = store.getState().thischat;
    mainmenu.setProps({
      chatavatar: chat.avatar
      ? `${filePrefix}${chat.avatar}`
      : defaultChatAvatar,
      chatname: chat.title as string,
    })

     });

  const createChat = new MenuItem({
    text: "Создать чат",
    id: "new-chat",
    events: {
      click: () => createChatModal()
    }
  });

  const inviteUser = new MenuItem({
    text: "Позвать друга в чат",
    id: "call-to-chat",
    events: {
      click: () => userSearchModal()
    }
  });

  const deleteUser = new MenuItem({
    text: "Удалить друга из чата",
    id: "del-from-chat",
    events: {
      click: () => modalUserRemove()
    }
  });

  const deleteChat = new MenuItem({
    text: "Удалить чат",
    id: "delete-chat",
    classname: "color-red",
    events: {
      click: () => alert("ПОКА НЕ МОЖЕМ")
    }
  });

  const chatMenuItems: MenuItem[] = [createChat, inviteUser, deleteUser, deleteChat];

  let chatMenuChildren: MultiListProps = {};

  chatMenuItems.forEach(function(elem, index) {
    chatMenuChildren[index] = elem;
  })
   
  const logout = new MenuItem({
    text: "Выйти",
    id: "logout",
    classname: "color-red",
    events: {
      click: () => {
        let logout = new UserAuthController;
        logout.logOut();
      }
    }
  });

  const actionsMenuItems: MenuItem[] = [logout];

  let actionsMenuChildren: MultiListProps = {};

  actionsMenuItems.forEach(function(elem, index) {
    actionsMenuChildren[index] = elem;
  });

  const mainmenu = new ChatsMenu(
    {
      chatavatar: "",
      chatname: "",
      chatMenu: new MultiList(
        chatMenuChildren,
        "ul",
        ""
      ),
      actionsMenu: new MultiList(
        actionsMenuChildren,
        "ul",
        ""
      )
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

}
