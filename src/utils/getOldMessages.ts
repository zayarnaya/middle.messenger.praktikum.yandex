import { chatIDfromLocation } from "../consts";
import { HTTPTransport } from "./http-transport";
import store, { StoreEvents } from "./store";

export function getOldMessages(chatID: number, token: string) {
    console.log("getOldMessages");
    let state = store.getState();
    console.log(state, "STATE GETOLDMSG");
    //let userID = state.user.id;
    let userID = localStorage.getItem("user_id");
    //console.log(userID);
    //return;
    //let thisID = chatIDfromLocation();
    let chatusersRaw = state[`chat${chatID}_users`];
    //console.log(chatusersRaw);
    let chatUsersById = {};
    chatusersRaw.forEach(user => {
        Object.assign(chatUsersById, {[user.id]: user.display_name});
    });
    let messages = [];
    const socket = new WebSocket
    (`wss://ya-praktikum.tech/ws/chats/${userID}/${chatID}/${token}`);

    socket.addEventListener('open', () => {
        console.log('Соединение установлено');
        socket.send(JSON.stringify({
            content: '0',
            type: 'get old',
          })); 
       
      });

      socket.addEventListener('message', event => {
        console.log('Получены данные', event.data);
        let cdata = JSON.parse(event.data);
        console.log(cdata, "CDATA");
        //store.set(`chat_${chatID}_data`, cdata);
        //let timeDate = cdata.time;
        //let time = timeDate.slice(11, 16);
        //let thatID = cdata.user_id;

        cdata.forEach(data => {
            let time = data.time.slice(11, 16);
            messages.push({
                No: data.id,
                user_id: data.user_id,
                time: time,
                text: data.content,
                file: data.file
            });
            
        });
        console.log(messages, "MESSAGES");
        //makeMessage(messages, userID, chatUsersById);
        makeMessage(messages);

        // if(userID == thatID) {

        // };
        // let seek = new HTTPTransport;
        // let avatar = "";
        // let name = "";
        // let message = cdata.content;
        // seek.get(`https://ya-praktikum.tech/api/v2/user/${thatID}`, {})
        // .then(response => {
        //     let bdata = JSON.parse(response.response);
        //     avatar = bdata.avatar;
        //     name = bdata.display_name
        //     ? bdata.display_name
        //     : bdata.first_name;
        // });
        //makeIncomingMessage(avatar, message, time, name);

        
        
      });
      //console.log(messages, "MESSAGES FROM OUT");


}

export function makeMessage(messages) {
        let state = store.getState();
        let chatID = chatIDfromLocation();
        let chatusersRaw = state[`chat${chatID}_users`];
        //console.log(chatusersRaw);
        let users = {};
        chatusersRaw.forEach(user => {
            Object.assign(users, {[user.id]: user.display_name});
        });
        let thisUserId = localStorage.getItem("user_id");

        let offset = new Date().getTimezoneOffset();
        let correction = offset/60;




    let chat: HTMLElement = document.querySelector(".chat-main__inner") as HTMLElement;
    let fragment = new DocumentFragment;
    messages.forEach(message => {
        let outer = document.createElement("div");
        let inner = document.createElement("div");
        let time = document.createElement("time");
        let name = document.createElement("div");
        let correctHour = Number(message.time.slice(0, 2)) - correction;//ой нет, коррекцию надо по-другому делать
        let correctTime = correctHour + message.time.slice(2);
        if(message.user_id == thisUserId) {
            outer.classList.add("outer-out");
            inner.classList.add("inner-out");
        } else {
            outer.classList.add("outer-in");
            inner.classList.add("inner-in");
            name.textContent = users[message.user_id];
        }
        inner.textContent = message.text;
        time.textContent = correctTime;
        //name.textContent = message.username;
        outer.append(inner);
        outer.append(time);
        outer.append(name);
        fragment.appendChild(outer);

    });
    //console.log(fragment);
    chat.appendChild(fragment);
}
