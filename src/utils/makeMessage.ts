import { UserProps } from "../APItypes";
import { chatIDfromLocation } from "../consts";
import store from "./store";

export function makeMessage(messages: any[]) {
    let state = store.getState();
    let chatID = chatIDfromLocation();
    let chatusersRaw: UserProps[] = state[`chat${chatID}_users`] as UserProps[];
    let users: Record<string, any> = {};
    chatusersRaw.forEach(user => {
        Object.assign(users, {[`${user.id}`]: user.display_name});
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
    let correctHour = Number(message.time.slice(0, 2)) - correction;
    if(correctHour >= 24) {
        correctHour = correctHour - 24;
      } else if(correctHour < 0) {
        correctHour = Math.abs(correctHour);
      }
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
    outer.append(inner);
    outer.append(time);
    outer.append(name);
    fragment.appendChild(outer);

});
chat.append(fragment);
}
