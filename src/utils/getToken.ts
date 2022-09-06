import { ChatsController } from "./controllers/chatsController";
import store from "./store";

export function getToken(id: number) {
  const chatInfo = new ChatsController;

    chatInfo.getToken(id)
    .then(response => {
        let adata = JSON.parse(response.response);
        store.setThisChat("thisChat", {
                  id: id,
                  token: adata.token
              });
        // store.set("thisChat", {
        //         id: id,
        //         token: adata.token
        //     });

    });


}

