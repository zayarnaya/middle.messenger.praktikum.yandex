import { makeIncomingMessage } from "../components/chats/chat-main/chat-message/chat-message-in";
import { makeOutgoingMessage } from "../components/chats/chat-main/chat-message/chat-message-out";
import { router } from "../consts";
import { ChatsController } from "./controllers/chatsController";
import { getOldMessages, makeMessage } from "./getOldMessages";
import { HTTPTransport } from "./http-transport";
import store, { StoreEvents } from "./store";

export function getToken(id: number) {
  console.log("GETTOKEN---------------------");
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
        store.set("this_chat", {
                id: id,
                token: adata.token
            });

    });


}

