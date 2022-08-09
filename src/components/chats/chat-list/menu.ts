import { ChatlistUserprofile } from "./chatlist_userprofile/chatlist-userprofile";

//import { ChatLeftMenu } from "./chat-list-menu/chat-list-menu";
import { data } from "../../../data";
//import { ChatList } from "./chat-list-layout/chat-list-layout";
import { render } from "../../../utils/renderDOM";
import { layout_chats } from "../../../layouts/chats/chat-static/chat-static";


export function buildChatLeftPanel() {
    const profile = new ChatlistUserprofile(data);

    const menu = new ChatLeftMenu({
        chatuserprofile: profile
    });

    const left = new ChatList({
        chatlistmenu: menu
    });
    layout_chats();
    console.log(profile, "PROFILE");
    console.log(menu, "MENU");
    console.log(left, "LEFT");
    render(".chat-list", left);

}
