import { router } from "../consts";
import { HTTPTransport } from "./http-transport";
import store from "./store";

export function loadChat(id: number) {
    console.log("000");
    const request = new HTTPTransport;
    //const cookie = document.cookie;
    //console.log(cookie, "cookie");
    request.get(`/api/v2/chats/token/${id}`, {headers: {

    }})
    .then(response => console.log(response));
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
          content: message,
          type: 'message',
        }));
        console.log(message, "УШЛО");
        
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
      });
      
      socket.addEventListener('error', event => {
        console.log('Ошибка', event.message);
      });
}
