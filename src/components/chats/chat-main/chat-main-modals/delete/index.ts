import { render } from "../../../../../utils/renderDOM";
import { Button } from "../../../../buttons/button-submit/button";
import "./../chat-main-modals.scss";
import { ChatsDeleteChat } from "./chat-main-modals-delete";

export function deleteChatModal() {
  const deleteModal = new ChatsDeleteChat({
    button: new Button({
      name: "deleteChat",
      label: "Удалить навсегда!",
      type: "submit",
      class: "submit-button",
    }),
  });

  render(".modal-place", deleteModal);
  const button: HTMLElement = document.getElementById(
    "close-button"
  ) as HTMLElement;
  const modalPlace: HTMLElement = document.getElementById(
    "modal-place"
  ) as HTMLElement;
  button.addEventListener("click", function () {
    modalPlace.textContent = "";
  });
}
