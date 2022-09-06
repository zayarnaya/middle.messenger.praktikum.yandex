import { UserProps } from "../APItypes";
import { wssPrefix } from "../consts";
import { makeMessage } from "./makeMessage";
import { isEmpty } from "./minor-functions/isEmpty";
import { isEqualArrays } from "./minor-functions/isEqualArrays";
import store from "./store";

export function getOldMessages(chatID: number, token: string) {
  console.log("GETOLDMESSAGES");
  let state = store.getState();
  let userID = localStorage.getItem("user_id");

  let chatusersRaw: UserProps[] = state[`chat${chatID}_users`] as UserProps[];

  if(!chatusersRaw) {
    return;
  }

  if(!state.thisChat || chatID != state.thisChat.id) {
    return;
  }

  let chatUsersById = {};
  chatusersRaw.forEach((user) => {
    Object.assign(chatUsersById, { [`${user.id}`]: user.display_name });
  });
  let messages: any[] = [];
  const socket = new WebSocket(
    `${wssPrefix}/${userID}/${chatID}/${token}`
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
    if(event.data.includes("token")) {
      console.log("ТОКЕН НЕПРАВИИЛЬНЫЙ");
      return;
    }
    console.log("МЕССАДЖ ПОШОООООЛ");
    let cdata = JSON.parse(event.data);
    cdata.forEach((data) => {
      let time = data.time.slice(11, 16);
      // let correctHour = Number(time.slice(0, 2)); 

      // if(correctHour >= 24) {
      //   correctHour = correctHour - 24;
      // } else if(correctHour < 0) {
      //   correctHour = Math.abs(correctHour);
      // }
      // let correctTime = correctHour + time.slice(2);
      messages.push({
        No: data.id,
        user_id: data.user_id,
        time: time,
        text: data.content,
        file: data.file,
      });
    });
    let orderedMessages: any[] = messages.reverse();
    console.log(orderedMessages, "ORDERED"); //то есть двоится не здесь
    console.log("НАДО БРАТЬ!");
    document.querySelector(".chat-main__inner").textContent = "";
    makeMessage(orderedMessages);
  });

    //makeMessage(orderedMessages);
    
    // const chatsmsg = `chat${chatID}_messages`;
    // const oldMsg = store.getState()[chatsmsg];
    // if(!oldMsg || !isEqualArrays(oldMsg, orderedMessages)) {
    //   console.log("НАДО БРАТЬ!");
    //   makeMessage(orderedMessages);
    //   store.set(`chat${chatID}_messages`, orderedMessages);

    // } else if (!!oldMsg && !isEmpty(oldMsg)
    //   && !!isEqualArrays(oldMsg, orderedMessages) 
    //   && !document.querySelector('.chat-main__inner').textContent) {
    //     console.log("НАДО ОТРЕНДЕРИТЬ");
    //     makeMessage(orderedMessages);
    //   }

  //});
  return;
}
