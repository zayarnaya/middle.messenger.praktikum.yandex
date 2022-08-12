import { Chat } from "../../chat";
import chatListItem from "./chatlist-item.hbs";

export class ChatListItem extends Chat {
    constructor(propsAndChildren: Object) {
        super("li", propsAndChildren);
        this.props = propsAndChildren;
        this.events = {
            click: function() {
                let active = document.querySelector(".highlight");
                
                if(this == active) {
                    return;

                } else if(active) { 
                    active.classList.remove
                    ("highlight");
                    this.classList.add("highlight");  
                     
                } else if (!active) {
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
