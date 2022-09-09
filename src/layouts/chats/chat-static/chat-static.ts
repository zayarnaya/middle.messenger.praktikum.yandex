import { wrap } from "../../../consts";
import layoutChats from "./chat-static.hbs";

export function chatsPageLayout() {
  wrap.innerHTML = layoutChats();
}
