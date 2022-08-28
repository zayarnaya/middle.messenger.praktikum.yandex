import { chatIDfromLocation } from "../../consts";
import { chatsPageLayout } from "../../layouts/chats/chat-static/chat-static";
import { isEmpty } from "../../utils/minor-functions/isEmpty";
import store from "../../utils/store";
import { buildLeftPanel } from "./chat-list/chat-list";
import { buildRightPanel } from "./chat-main/chat-main";

export function chatsPage() {
  //let state = store.getState();

  chatsPageLayout();
  buildLeftPanel();
  buildRightPanel();
  //console.log(!!isEmpty(state), state.user, "СТЕЙТ");
  //console.log(Object.values(state), "КЛЮЧИ");
}
