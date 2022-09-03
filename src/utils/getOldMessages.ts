import { UserProps } from "../APItypes";
import { makeMessage } from "./makeMessage";
import store from "./store";

export function getOldMessages(chatID: number, token: string) {
  let state = store.getState();
  let userID = localStorage.getItem("user_id");

  let offset = new Date().getTimezoneOffset();
  let correction = offset / 60;
  let chatusersRaw: UserProps[] = state[`chat${chatID}_users`] as UserProps[];

  let chatUsersById = {};
  chatusersRaw.forEach((user) => {
    Object.assign(chatUsersById, { [`${user.id}`]: user.display_name });
  });
  let messages: any[] = [];
  const socket = new WebSocket(
    `wss://ya-praktikum.tech/ws/chats/${userID}/${chatID}/${token}`
  );

  socket.addEventListener("open", () => {
    socket.send(
      JSON.stringify({
        content: "0",
        type: "get old",
      })
    );
  });

  socket.addEventListener("message", (event) => {
    let cdata = JSON.parse(event.data);
    cdata.forEach((data) => {
      let time = data.time.slice(11, 16);
      let correctHour = Number(time.slice(0, 2)) - correction; 
      if(correctHour >= 24) {
        correctHour = correctHour - 24;
      } else if(correctHour < 0) {
        correctHour = Math.abs(correctHour);
      }
      let correctTime = correctHour + time.slice(2);
      messages.push({
        No: data.id,
        user_id: data.user_id,
        time: correctTime,
        text: data.content,
        file: data.file,
      });
    });
    let orderedMessages: any[] = messages.reverse();
    makeMessage(orderedMessages);
  });
  return;
}
