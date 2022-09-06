import { chatIDfromLocation } from "../consts";
import { ChatsController } from "./controllers/chatsController";
import store from "./store";

export function getChatList() {
const chats = new ChatsController;
const chatID = chatIDfromLocation();
chats.getChats()
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
          //store.setChatList("chat", bdata);
          } else {
            return;
          }
        });
    }
