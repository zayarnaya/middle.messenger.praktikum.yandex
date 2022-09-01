import { makeIncomingMessage } from "../components/chats/chat-main/chat-message/chat-message-in";
import { makeOutgoingMessage } from "../components/chats/chat-main/chat-message/chat-message-out";
import { router } from "../consts";
import { ChatsController } from "./controllers/chatsController";
import { getOldMessages, makeMessage } from "./getOldMessages";
import { HTTPTransport } from "./http-transport";
import store, { StoreEvents } from "./store";

export function getChatUsers(id: number) {
  console.log("GETCHATUSERS---------------------");
  const chatInfo = new ChatsController;

    chatInfo.getChatUsers(id)
  .then(response => {
    if(response.status == 200) {
      let adata = JSON.parse(response.response);
      store.set(`chat${id}_users`, adata);

    } else {
      console.log("что-то пошло не так с добычей юзеров");
    }
  });

}

