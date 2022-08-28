import store from "../../../../../utils/store";
import { ChatMessageOut } from "./chat-message-out";



export function makeOutgoingMessage(message: string, time: string) {
    console.log("MESSAGE");
    let userData = store.getState().user;
    let message1 = new ChatMessageOut({
        avatar: userData.avatar,
        message: message,
        time: time,
        name: userData.display_name
        ? userData.display_name
        : userData.first_name
      });
    
      console.log(message1.render());
      let messageList: Node = document.querySelector(".chat-main__inner") as Node;
      messageList.appendChild(message1.render());

}

