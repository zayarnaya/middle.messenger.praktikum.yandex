import { UserProps } from "../APItypes";
import { IncomingMessage } from "../components/chats/chat-main/chat-message/chat-message-in/chat-message-in";
import { OutgoingMessage } from "../components/chats/chat-main/chat-message/chat-message-out/chat-message-out";
import { chatIDfromLocation, defaulAvatar, filePrefix } from "../consts";
//import { ChatMessageProps } from "../types";
//import { renderAdd } from "./renderAdd";
import store from "./store";

export function makeMessage(messages: any[]) {
  console.log(messages, "MESSAGES");
  let state = store.getState();
  let chatID = chatIDfromLocation();
  let chatusersRaw: UserProps[] = state[`chat${chatID}_users`] as UserProps[];
  let users: Record<string, any> = {};
  chatusersRaw.forEach((user) => {
    const nickname = user.display_name
      ? user.display_name
      : `${user.first_name} ${user.second_name}`;
    const avatar = user.avatar
    ? `${filePrefix}${user.avatar}`
    : defaulAvatar;
    Object.assign(users, { [`${user.id}`]: {
      nickname: nickname,
      avatar: avatar
   }
   });
  });

console.log(users, "USERS");

  const thisUserId = localStorage.getItem("user_id");
  const myAvatar = localStorage.getItem("user_avatar")
  ? `${filePrefix}${localStorage.getItem("user_avatar")}`
  : defaulAvatar;
  const myNickname = localStorage.getItem("user_display_name")
  ? localStorage.getItem("user_display_name")
  : `${localStorage.getItem("user_first_name")} ${localStorage.getItem("user_second_name")}`;

  const offset = new Date().getTimezoneOffset();
  const correction = offset / 60;

  const chat: HTMLElement = document.querySelector(
    ".chat-main__inner"
  ) as HTMLElement;
  if (chat.textContent == "Чтобы начать общаться, выберите чат в панели слева") {
    chat.textContent = "";
  }
  let fragment = new DocumentFragment();
  messages.forEach((message) => {
    let correctHour = Number(message.time.slice(0, 2)) - correction;
    if (correctHour >= 24) {
      correctHour = correctHour - 24;
    } else if (correctHour < 0) {
      correctHour = Math.abs(correctHour);
    }
    let correctTime = correctHour + message.time.slice(2);
    if(message.user_id == thisUserId) {
      const outMessage: OutgoingMessage = new OutgoingMessage({
        avatar: myAvatar,
        nickname: myNickname,
        message: message.text,
        time: correctTime,
        date: message.date,
      });
    fragment.append(outMessage.getContent());
      //renderAdd("chat-main__inner", outMessage);
    } else {
      const inMessage: IncomingMessage = new IncomingMessage({
        avatar: users[message.user_id].avatar,
        nickname: users[message.user_id].nickname,
        message: message.text,
        time: correctTime,
        date: message.date,
      });
      fragment.append(inMessage.getContent());
      //renderAdd("chat-main__inner", inMessage);
    }

    // let outer = document.createElement("div");
    // let inner = document.createElement("div");
    // let time = document.createElement("time");
    // let name = document.createElement("div");
    // let correctHour = Number(message.time.slice(0, 2)) - correction;
    // if (correctHour >= 24) {
    //   correctHour = correctHour - 24;
    // } else if (correctHour < 0) {
    //   correctHour = Math.abs(correctHour);
    // }
    // let correctTime = correctHour + message.time.slice(2);
    // if (message.user_id == thisUserId) {
    //   outer.classList.add("outer-out");
    //   inner.classList.add("inner-out");
    // } else {
    //   outer.classList.add("outer-in");
    //   inner.classList.add("inner-in");
    //   name.textContent = users[message.user_id];
    // }
    // inner.textContent = message.text;
    // time.textContent = correctTime;
    // outer.append(inner);
    // outer.append(time);
    // outer.append(name);
    // fragment.appendChild(outer);
  });
  // if (chat.textContent == "Чтобы начать общаться, выберите чат в панели слева") {
  //   chat.textContent = "";
  // }
  chat.append(fragment);
}
