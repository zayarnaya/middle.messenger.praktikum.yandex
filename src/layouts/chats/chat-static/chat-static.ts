import layoutChats from "./chat-static.hbs";

export function chatsPageLayout() {
  document.querySelector(".messenger-wrapper").innerHTML = layoutChats();
}
