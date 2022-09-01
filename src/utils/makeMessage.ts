import { chatIDfromLocation } from "../consts";
import store from "./store";

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
//chat.textContent = "";
chat.append(fragment);
}
