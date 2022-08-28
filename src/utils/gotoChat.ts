import { makeIncomingMessage } from "../components/chats/chat-main/chat-message/chat-message-in";
import { makeOutgoingMessage } from "../components/chats/chat-main/chat-message/chat-message-out";
import { router } from "../consts";
import { HTTPTransport } from "./http-transport";
import store from "./store";

export function loadChat(id: number) {
    console.log("000");
    const request = new HTTPTransport;
    request.post(`https://ya-praktikum.tech/api/v2/chats/token/${id}`, {})
    .then(response => {
        console.log(response.response);
        let adata = JSON.parse(response.response);
        console.log(adata);
        store.set("chat", {
                id: id,
                token: adata.token
            });
    })
    .then(() => {
        console.log(store.getState(), "STATE");
        //sendMessage()
    });

    //.then(data => {
    //console.log('token', data.token); // Получаем строку
    // store.set("chat", {
    //     id: id,
    //     token: data.token
    // });
    //}); 
    

}

export function sendMessage(chatID: number, userID: number, token: string, message: string) {

    const socket = new WebSocket
    (`wss://ya-praktikum.tech/ws/chats/${userID}/${chatID}/${token}`);

    socket.addEventListener('open', () => {
        console.log('Соединение установлено');
        socket.send(JSON.stringify({
            content: '0',
            type: 'get old',
          })); 
      
        socket.send(JSON.stringify({
          content: message,
          type: 'message',
        }));
        console.log(message, "УШЛО");
        makeOutgoingMessage(message, "13:00");
        
      });
      
      socket.addEventListener('close', event => {
        if (event.wasClean) {
          console.log('Соединение закрыто чисто');
        } else {
          console.log('Обрыв соединения');
        }
      
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
      });
      
      socket.addEventListener('message', event => {
        console.log('Получены данные', event.data);
        let cdata = JSON.parse(event.data);
        console.log(cdata, "CDATA");
        let timeDate = cdata.time;
        let time = timeDate.slice(11, 16);
        let thatID = cdata.user_id;
        if(userID == thatID) {return};
        let seek = new HTTPTransport;
        let avatar = "";
        let name = "";
        let message = cdata.content;
        seek.get(`https://ya-praktikum.tech/api/v2/user/${thatID}`, {})
        .then(response => {
            let bdata = JSON.parse(response.response);
            avatar = bdata.avatar;
            name = bdata.display_name
            ? bdata.display_name
            : bdata.first_name;
        });
        makeIncomingMessage(avatar, message, time, name);

        
        
      });
      
      socket.addEventListener('error', event => {
        console.log('Ошибка', event.message);
      });
}
