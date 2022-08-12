import { searchForm } from "../../forms/form-search/form-search";
import { data } from "../../../data";
import { ChatListLeftPanel } from "./chat-list-layout/chat-list-layout";
import { ChatListMenu } from "./chat-list-menu/chat-list-menu";
import { ChatlistUserprofile } from "./chatlist_userprofile/chatlist-userprofile";
import { render } from "../../../utils/renderDOM";
import { InputField } from "../../input/input-field";
import { Button } from "../../buttons/button-submit/button";
import { ChatListItem } from "./chatlist-item/chatlist-item";
import { MultiList } from "../../multi-list/multi-list";
import "./../../../style.scss";

export function buildLeftPanel() {

    const chats = Object.values(data.chats);
    const theChildren: Record<string, ChatListItem> = {};
    const ids = [];

    for (let i = 0; i < chats.length; i++) {
        let key = `chat${i}`;
        let val = chats[i];
        let child = new ChatListItem(val)
        let obj = { [key]: child };
        let id = child._id;

        ids.push(id);
        Object.assign(theChildren, obj);

    };

    const panel = new ChatListLeftPanel("div", {
        chatListMenu: new ChatListMenu("nav", {
            chatuserprofile: new ChatlistUserprofile("div", data, "chat-list__profile"),

            formsearch: new searchForm("search", {
                input: new InputField({
                    type: "search",
                    placeholder: "Поиск"

                }),
                button: new Button({
                    class: "chat-list__searchform-button"
                })
            })
        }, "chat-list__menu"),
        chatList: new MultiList(theChildren, "ul", "chat-list__list_unmarked")

    }, "chat-list");

    render(".chat-list-wrapper", panel);
}

