import { Chat } from "../../chat";
import chatListItem from "./chatlist-item.hbs";

export class ChatListItem extends Chat {
    constructor(propsAndChildren: Object) {
        super("li", propsAndChildren);
        this.props = propsAndChildren;
        this.events = {
            click: function() {
                
                if(this.classList.contains("highlight")) {
                    return;
                } else if(document.querySelector(".highlight")) { 

                    document.querySelector(".highlight").classList.remove
                    ("highlight");
                    this.classList.add("highlight");   
                } else if (!document.querySelector(".highlight")) {
                    this.classList.add("highlight");
                }
                             
            }
        };
        this.eventTarget = ".chat-list-item";
    }

    render() {
        return this.compile(chatListItem, this.props);
    }
}
