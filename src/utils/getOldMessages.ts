import { UserProps } from "../APItypes";
import { wssPrefix } from "../consts";
import { makeMessage } from "./makeMessage";
import store from "./store";

export function getOldMessages(chatID: number, token: string) {
  let state = store.getState();
  let userID = localStorage.getItem("user_id");

  let chatusersRaw: UserProps[] = state[`chat${chatID}_users`] as UserProps[];

  if (!chatusersRaw) {
    return;
  }

  if (!state.thisChat || chatID != state.thisChat.id) {
    return;
  }

  let chatUsersById = {};
  chatusersRaw.forEach((user) => {
    Object.assign(chatUsersById, { [`${user.id}`]: user.display_name });
  });
  let messages: any[] = [];
  const socket = new WebSocket(`${wssPrefix}/${userID}/${chatID}/${token}`);

  socket.addEventListener("open", () => {
    socket.send(
      JSON.stringify({
        content: "0",
        type: "get old",
      })
    );
  });

  socket.addEventListener("message", (event) => {
    if (event.data.includes("token")) {
      return;
    }
    let cdata = JSON.parse(event.data);
    cdata.forEach((data) => {
      let time = data.time.slice(11, 16);
      messages.push({
        No: data.id,
        user_id: data.user_id,
        time: time,
        text: data.content,
        file: data.file,
      });
    });
    let orderedMessages: any[] = messages.reverse();
    const chatField: HTMLElement = document.querySelector(
      ".chat-main__inner"
    ) as HTMLElement;
    chatField.textContent = "";
    makeMessage(orderedMessages);
  });
  return;
}
