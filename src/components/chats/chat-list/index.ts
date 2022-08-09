import { layout_chats } from "../../../layouts/chats/chat-static/chat-static";
//import { ChatList } from "./chat-list-layout/chat-list-layout";
import { data } from "../../../data";
//import { ChatLeftMenu } from "./chat-list-menu/chat-list-menu";
import { render } from "../../../utils/renderDOM";

export function chatListOuter() {
/*
    let inputs = Object.values(data.input.change_signin);
    let theChildren = {};

    for (let i = 0; i < inputs.length; i++) {
        let key = `input${i}`;
        let val = inputs[i];
        let obj = { [key]: new InputField(val) };


        Object.assign(theChildren, obj);

    }

    Object.assign(theChildren, { avatar: new avatarChange(data) });
    Object.assign(theChildren, { button: new Button(data.button.changeSubmit) });
    console.log(theChildren);
    */
    layout_chats();
    const leftPanel = new ChatList({
        chatlistmenu: new ChatLeftMenu(data),
        //chatlist: 
    });
    render(".chat-list", leftPanel);

}
