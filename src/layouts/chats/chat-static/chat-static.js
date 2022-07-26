import template from "./chat-static.hbs";

export function layout_chats() {
    document.querySelector(".messenger-wrapper").innerHTML = template();
}
