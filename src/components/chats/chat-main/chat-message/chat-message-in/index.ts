import store from "../../../../../utils/store";
import { ChatMessageIn } from "./chat-message-in";




export function makeIncomingMessage(avatar: string, message: string, time: string, name: string) {

    let message1 = new ChatMessageIn({
        avatar: avatar,
        message: message,
        time: time,
        name: name
      });

      let messageList: Node = document.querySelector(".chat-main__inner") as Node;
      messageList.appendChild(message1.render());

}

