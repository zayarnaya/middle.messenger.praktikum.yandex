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

export function buildRightPanel(id?: number) {

  let loc = document.location.pathname;
  let chatID: number;
  if(loc.includes("chats")) {
    chatID = Number(loc.slice(loc.indexOf("chats") + 6));
    console.log(chatID, "CHATID");
    loadChat(chatID);
  }



  const panel = new ChatRightPanelLayout(
    "div",
    {
      mainmenu: new ChatsMenu(
        {
          chatavatar: data.chats[1].avatar,
          chatname: data.chats[1].name,
        },
        "chat-main__menu"
      ),

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
      ),

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
  document.getElementById("call-to-chat")?.addEventListener("click", userSearchModal);
  document.getElementById("new-chat")?.addEventListener("click", createChatModal);
  document.getElementById("logout")?.addEventListener("click", () => {
    let http = new HTTPTransport;
    http.post("https://ya-praktikum.tech/api/v2/auth/logout", {})
    .then(response => {
      if(response.status == 200) {
        document.location.pathname = "/logout";
      } else if (response.status != 200) {
        console.log(response, "Что-ТО НЕ ТАК");
      }
    })
  })
}
