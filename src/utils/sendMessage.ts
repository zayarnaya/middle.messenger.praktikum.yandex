import { wssPrefix } from "../consts";
import { makeMessage } from "./makeMessage";

export function sendMessage(
  chatID: number,
  userID: number,
  token: string,
  message: string
) {
  const socket = new WebSocket(`${wssPrefix}/${userID}/${chatID}/${token}`);

  socket.addEventListener("open", () => {
    socket.send(
      JSON.stringify({
        content: message,
        type: "message",
      })
    );
  });

  socket.addEventListener("close", (event) => {
    if (event.wasClean) {
      console.log("Соединение закрыто чисто");
    } else {
      console.log("Обрыв соединения");
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  });

  socket.addEventListener("message", (event) => {
    console.log("Получены данные", event.data);
    let cdata = JSON.parse(event.data);
    let offset = new Date().getTimezoneOffset();
    let correction = offset / 60;

    let time = cdata.time.slice(11, 16);

    let correctHour = Number(time.slice(0, 2)) - correction;
    if (correctHour >= 24) {
      correctHour = correctHour - 24;
    } else if (correctHour < 0) {
      correctHour = Math.abs(correctHour);
    }
    let correctTime = correctHour + time.slice(2);

    makeMessage([
      {
        No: cdata.id,
        user_id: cdata.user_id,
        time: correctTime,
        text: cdata.content,
        file: cdata.file,
      },
    ]);
  });

  socket.addEventListener("error", (event) => {
    console.log("Ошибка", event.message);
  });
}
