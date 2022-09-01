import { makeMessage } from "./makeMessage";

export function sendMessage(chatID: number, userID: number, token: string, message: string) {

    const socket = new WebSocket
    (`wss://ya-praktikum.tech/ws/chats/${userID}/${chatID}/${token}`);

    socket.addEventListener('open', () => {
        console.log('Соединение установлено');
        // socket.send(JSON.stringify({
        //     content: '0',
        //     type: 'get old',
        //   })); 
      
        socket.send(JSON.stringify({
          content: message,
          type: 'message',
        }));
        console.log(message, "УШЛО");
        //makeOutgoingMessage(message, "13:00");
        //makeMessage([message]);
        
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
        let cdata = JSON.parse(event.data);
        // console.log(cdata, "CDATA");
        // store.set(`${chatID}data`, cdata);
        // let timeDate = cdata.time;
        // let time = timeDate.slice(11, 16);
        // let thatID = cdata.user_id;
        // if(userID == thatID) {return};
        // let seek = new HTTPTransport;
        // let avatar = "";
        // let name = "";
        //let message = cdata.content;
        // seek.get(`https://ya-praktikum.tech/api/v2/user/${thatID}`, {})
        // .then(response => {
        //     let bdata = JSON.parse(response.response);
        //     avatar = bdata.avatar;
        //     name = bdata.display_name
        //     ? bdata.display_name
        //     : bdata.first_name;
        // });
        // makeIncomingMessage(avatar, message, time, name);
        let offset = new Date().getTimezoneOffset();
        let correction = offset/60;

          let time = cdata.time.slice(11, 16);

          let correctHour = Number(time.slice(0, 2)) - correction;//ой нет, коррекцию надо по-другому делать
          let correctTime = correctHour + time.slice(2);


        makeMessage([{
          No: cdata.id,
          user_id: cdata.user_id,
          time: correctTime,
          text: cdata.content,
          file: cdata.file
        }]);

        
        
      });
      
      socket.addEventListener('error', event => {
        console.log('Ошибка', event.message);
      });
}
