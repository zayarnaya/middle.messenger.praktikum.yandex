import { ChatsModalProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";
import { ChatsController } from "../../../../../utils/controllers/chatsController";
import store from "../../../../../utils/store";
import chatMainModalDelete from "./chat-main-modal-delete.hbs";


export class ChatsDeleteChat extends Block<ChatsModalProps, ChatsDeleteChat> {
  public constructor(props: ChatsModalProps, classname?: string) {
    super("div", props, false, classname = "modal");
    this.events = {
      click: function () {
        // const state = store.getState();
        // const chatID = state.chat.id;
        let loc = document.location.pathname;
        let index = loc.indexOf("/chats");        
        const chatID = Number(loc.slice(index));
        const deleteChat = new ChatsController;
        deleteChat.delete({
          id: chatID
        });
        }        
      };

    this.eventTarget = "button";
  }

  public render() {
    return this.compile(chatMainModalDelete, this.props);
  }
}
