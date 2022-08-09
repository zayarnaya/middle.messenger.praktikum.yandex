import { searchForm } from "../../forms/form-search/form-search";
import { data } from "../../../data";
import { ChatListLeftPanel } from "./chat-list-layout/chat-list-layout";
import { ChatListMenu } from "./chat-list-menu/chat-list-menu";
import { ChatlistUserprofile } from "./chatlist_userprofile/chatlist-userprofile";
import { render } from "../../../utils/renderDOM";
import { layout_chats } from "../../../layouts/chats/chat-static/chat-static";
import { InputField } from "../../input/input-field";
import { Button } from "../../buttons/button-submit/button";
import { buildRightPanel } from "../chat-main/chat-main";
import "./../../../style.scss";


export function buildLeftPanel() {
    const profile = new ChatlistUserprofile("div", data, "chat-list__profile");
    const input = new InputField({
        type: "search",
        placeholder: "Поиск"

    });
    const button = new Button({
        class: "chat-list__searchform-button"
    });
    const search = new searchForm ("search", {
        input: input,
        button: button
    });
    const menu = new ChatListMenu("div", {
        chatuserprofile: profile,
        formsearch: search
    });
    const panel = new ChatListLeftPanel("div", {
        chatlistmenu: menu

    });


layout_chats();
render(".chat-list", panel);
buildRightPanel();
    
}
