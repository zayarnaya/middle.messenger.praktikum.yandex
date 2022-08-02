import Handlebars from "handlebars";
import { data } from "../data";

import { layout_chats } from "../layouts/chats/chat-static/chat-static.js";
import chatList from "./../components/chatlist/chat-list/chat-list.hbs";
import chatMain from "./../components/chat-main/chat-main.hbs";
import chatlist_profile from "./../components/chatlist/chatlist_userprofile/chatlist-userprofile.hbs";
import chatlist_item from "./../components/chatlist/chatlist-item/chatlist-item.hbs";
import "./../components/chat-main/chat-main.scss";

Handlebars.registerPartial("chatlist-profile", chatlist_profile);
Handlebars.registerPartial("chatlist-item", chatlist_item);

export function chatPage() {
  layout_chats();
  document.querySelector(".chat-list").innerHTML = chatList(data);
  document.querySelector(".chat-main").innerHTML = chatMain(data);
}
