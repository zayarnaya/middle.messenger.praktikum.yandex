import { chatIDfromLocation } from "../consts";
import { ChatsController } from "./controllers/chatsController";
import store from "./store";

export function getChatList() {
    console.log("GETCHATS---------------------");

const chats = new ChatsController;
const chatID = chatIDfromLocation(); //оно тут нужно?

chats.getChats(0, 10)
        .then(response => {
          if(response.status == 200) {
          let adata = JSON.parse(response.response);
          let bdata = {};
          adata.forEach(data => {
            if(data.id == chatID) {
              Object.assign(bdata, data);
            }
          });
          store.set("chat", bdata);
          console.log(response.response, response.status);
          } else {
            console.log(response.response, response.status);
          }
        });
    }
