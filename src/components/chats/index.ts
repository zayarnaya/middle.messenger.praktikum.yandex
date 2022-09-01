import { chatsPageLayout } from "../../layouts/chats/chat-static/chat-static";
import { buildLeftPanel } from "./chat-list/chat-list";
import { buildRightPanel } from "./chat-main/chat-main";

export function chatsPage() {
  chatsPageLayout();
  buildLeftPanel();
  buildRightPanel();

}
