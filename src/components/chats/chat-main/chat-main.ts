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

export function buildRightPanel() {
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
}
