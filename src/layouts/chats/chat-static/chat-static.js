export function layout_chats() {
    let fragment = document.createDocumentFragment();
    let chatsClassesOuter = ["chat-list-wrapper", "chat-main-wrapper"];
    let chatsClassesInner = ["chat-list", "chat-main"];
    
    document.querySelector(".messenger-wrapper").textContent = "";

    for (let i = 0; i < chatsClassesOuter.length; i++) {
        let elem = document.createElement("div");
        elem.classList.add(chatsClassesOuter[i]);
        let inner = document.createElement("div");
        inner.classList.add(chatsClassesInner[i]);
        elem.appendChild(inner);
        fragment.appendChild(elem);
        console.log(fragment);
    }

    document.querySelector(".messenger-wrapper").appendChild(fragment);
}
