import Handlebars from "handlebars";
import chatListItem from "./chatlist-item.hbs";

export function partialChatListItem() {
    return Handlebars.registerPartial("chatlistitem", chatListItem);
    
}
