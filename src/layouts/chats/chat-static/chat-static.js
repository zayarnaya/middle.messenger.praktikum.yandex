export function layout_chats() {
    let htmlString = `<div class="chat-list-wrapper"><div class="chat-list"></div></div><div class="chat-main-wrapper"><div class="chat-main"></div>`;
    document.querySelector('.messenger-wrapper').innerHTML = htmlString;
}