import { makeIncomingMessage } from "../components/chats/chat-main/chat-message/chat-message-in";
import { makeOutgoingMessage } from "../components/chats/chat-main/chat-message/chat-message-out";
import { router } from "../consts";
import { ChatsController } from "./controllers/chatsController";
import { getOldMessages, makeMessage } from "./getOldMessages";
import { HTTPTransport } from "./http-transport";
import store, { StoreEvents } from "./store";

export function loadChat(id: number) {
  console.log("LOADCHAT---------------------");
  const chatInfo = new ChatsController;

    //const request = new HTTPTransport;
    //request.post(`https://ya-praktikum.tech/api/v2/chats/token/${id}`, {})
    chatInfo.getToken(id)
    .then(response => {
        console.log(response.response);
        let adata = JSON.parse(response.response);
        //console.log(adata);
        //console.log(id, "АЙДИ?");
        //getOldMessages(id, adata.token);
        store.set("chat", {
                id: id,
                token: adata.token
            });

    });

    chatInfo.getChatUsers(id)
  .then(response => {
    if(response.status == 200) {
      let adata = JSON.parse(response.response);
      store.set(`chat${id}_users`, adata);

    } else {
      console.log("что-то пошло не так с добычей юзеров");
    }
  });

    store.on(StoreEvents.Updated, () => {
      let thisChat = store.getState().chat;
      getOldMessages(id, thisChat.token);
    })


    //.then(data => {
    //console.log('token', data.token); // Получаем строку
    // store.set("chat", {
    //     id: id,
    //     token: data.token
    // });
    //}); 
    

}

