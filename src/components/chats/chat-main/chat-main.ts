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
import { chatIDfromLocation } from "../../../consts";

export function buildRightPanel() {

  // let loc = document.location.pathname;
  // let chatID: number;
  // if(loc.includes("chats/")) {
  //   chatID = Number(loc.slice(loc.indexOf("chats") + 6));
  //   console.log(chatID, "CHATID");
  //   loadChat(chatID);
  // }
  let chatID = chatIDfromLocation(); //оно тут нужно?

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

  const deleteChat = new MenuItem({
    text: "Удалить чат",
    id: "delete-chat",
    classname: "color-red",
    events: {
      click: () => alert("ПОКА НЕ МОЖЕМ")
    }
  });

  const chatMenuItems: MenuItem[] = [createChat, inviteUser, deleteChat];

  let chatMenuChildren: MultiListProps = {};

  chatMenuItems.forEach(function(elem, index) {
    chatMenuChildren[index] = elem;
  })

  // chatMenuChildren = chatMenuItems.reduce((chatMenuChildren, item, i) => {
  //   chatMenuChildren[i] = item;
  //     return chatMenuChildren;
  //  }, {});

   
  const logout = new MenuItem({
    text: "Выйти",
    id: "logout",
    classname: "color-red",
    events: {
      click: () => {
        let logout = new UserAuthController;
        logout.logOut();
    //     let http = new HTTPTransport;
    // http.post("https://ya-praktikum.tech/api/v2/auth/logout", {})
    // .then(response => {
    //   if(response.status == 200) {
    //     document.location.pathname = "/logout";
    //   } else if (response.status != 200) {
    //     console.log(response, "Что-ТО НЕ ТАК");
    //   }
    // })
      }
    }
  });

  const actionsMenuItems: MenuItem[] = [logout];

  let actionsMenuChildren: MultiListProps = {};

  actionsMenuItems.forEach(function(elem, index) {
    actionsMenuChildren[index] = elem;
  })

  // actionsMenuChildren = actionsMenuItems.reduce((actionsMenuChildren, item, i) => {
  //   actionsMenuChildren[i] = item;
  //     return actionsMenuChildren;
  //  }, {});

console.log(chatMenuChildren, actionsMenuChildren, "ЬЕНЮ ПОЛЯ");

  const panel = new ChatRightPanelLayout(
    "div",
    {
      mainmenu: new ChatsMenu(
        {
          chatavatar: data.chats[1].avatar as string,
          chatname: data.chats[1].name as string,
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
      ),
/*
      maininner: new ChatsInnerField(
        "div",
        {
          date: "12 мая",

          incoming: new ChatMessageIn({
            avatar: data.chats[1].avatar,
            message: `<p>Какой чудесный день!</p>
                <p>Какой чудесный пень!</p>
                <p>Какой чудесный я!<br />
                    И песенка моя!</p>`,
            time: "11:56",
            name: data.chats[1].name,
          }),

          outgoing: new ChatMessageOut({
            avatar: data.user.avatar,
            message: `<p>Невероятно.</p>`,
            time: "12:06",
            name: data.user.profile.display_name.value,
          }),
        },
        "chat-main__inner"
      ), */

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
  // document.getElementById("call-to-chat")?.addEventListener("click", userSearchModal);
  // document.getElementById("new-chat")?.addEventListener("click", createChatModal);
  // document.getElementById("logout")?.addEventListener("click", () => {
  //   let http = new HTTPTransport;
  //   http.post("https://ya-praktikum.tech/api/v2/auth/logout", {})
  //   .then(response => {
  //     if(response.status == 200) {
  //       document.location.pathname = "/logout";
  //     } else if (response.status != 200) {
  //       console.log(response, "Что-ТО НЕ ТАК");
  //     }
  //   })
  // });

  /*
  let message1 = new ChatMessageOut({
    avatar: data.user.avatar,
    message: `<p>Невероятно.</p>`,
    time: "12:06",
    name: data.user.profile.display_name.value,
  });

  console.log(message1.render());
  let messageList: Node = document.querySelector(".chat-main__inner") as Node;
  messageList.appendChild(message1.render());
  */

}
