import { chatIDfromLocation } from "../consts";
import { loadChat } from "./loadChat";
import { HTTPTransport } from "./http-transport";
import { makeMessage } from "./makeMessage";
import store, { StoreEvents } from "./store";

export function getOldMessages(chatID: number, token: string) {
    console.log("getOldMessages");
    let state = store.getState();
    //console.log(state, "STATE GETOLDMSG");
    //let userID = state.user.id;
    let userID = localStorage.getItem("user_id");

    let offset = new Date().getTimezoneOffset();
    let correction = offset/60;

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

    // setInterval(function(){
    //     socket.send(JSON.stringify(
    //         {
    //             type: "ping"
    //         }));
    // }, 10000);




    socket.addEventListener('open', () => {
        console.log('Соединение установлено');
        socket.send(JSON.stringify({
            content: '0',
            type: 'get old',
          })); 
       
      });

      socket.addEventListener('message', event => {
        console.log('Получены данные', event.data);
        if(event.data.includes("WS token is not valid")) {
            loadChat(chatID);
        }
        let cdata = JSON.parse(event.data);
        console.log(cdata, "CDATA");
        //store.set(`chat_${chatID}_data`, cdata);
        //let timeDate = cdata.time;
        //let time = timeDate.slice(11, 16);
        //let thatID = cdata.user_id;

        cdata.forEach(data => {
            let time = data.time.slice(11, 16);
            let correctHour = Number(time.slice(0, 2)) - correction;//ой нет, коррекцию надо по-другому делать
            let correctTime = correctHour + time.slice(2);
            messages.push({
                No: data.id,
                user_id: data.user_id,
                time: correctTime,
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
