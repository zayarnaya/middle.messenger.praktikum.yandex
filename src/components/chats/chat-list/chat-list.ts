import Handlebars from "handlebars";
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
import { ChatListItem } from "./chatlist-item/chatlist-item";
import { Chat } from "../chat";
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
    const search = new searchForm("search", {
        input: input,
        button: button
    });
    const menu = new ChatListMenu("nav", {
        chatuserprofile: profile,
        formsearch: search
    }, "chat-list__menu");
    const panel = new ChatListLeftPanel("div", {
        chatlistmenu: menu

    }, "chat-list");


    layout_chats();
    render(".chat-list-wrapper", panel);
    buildRightPanel();
    const chats = Object.values(data.chats);
    const theChildren: Record<string, ChatListItem> = {};

    for (let i = 0; i < chats.length; i++) {
        let key = `chat${i}`;
        let val = chats[i];
        let obj = { [key]: new ChatListItem(val) };


        Object.assign(theChildren, obj);

    }

    let chatListTemplate = ``;

    Object.values(theChildren).forEach(child => {

        chatListTemplate += `<div data-id="${child._id}"></div>`;
    })

    let tmpl = Handlebars.compile(chatListTemplate);
    class List extends Chat {
        constructor(children: Object) {
            super("ul", children, "chat-list__list_unmarked");
            this.props = children;
        }

        render() {
            return this.compile(tmpl, this.props);
        }
    };

    let list = new List(theChildren);
    render(".chat-list__list", list);
}
