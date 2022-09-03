import { ChatsController } from "./controllers/chatsController";
import store from "./store";

export function getChatUsers(id: number) {
  const chatInfo = new ChatsController;

    chatInfo.getChatUsers(id)
  .then(response => {
    if(response.status == 200) {
      let adata = JSON.parse(response.response);
      store.set(`chat${id}_users`, adata);

    } else {
      return;
    }
  });

}

