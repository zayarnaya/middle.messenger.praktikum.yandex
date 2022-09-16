import { render } from "../../../../../utils/renderDOM";
import { Button } from "../../../../buttons/button-submit/button";
import { InputField } from "../../../../input/input-field";
import "./../chat-main-modals.scss";
import { ChatsCreateChat } from "./chat-main-modals-create";

export function createChatModal() {
  const createModal = new ChatsCreateChat({
    input: new InputField({
      type: "text",
      placeholder: "Напишите название чата",
      name: "createChatModalInput",
    }),
    button: new Button({
      name: "createChatSubmit",
      label: "Создать",
      type: "submit",
      class: "submit-button",
    }),
  });

  render(".modal-place", createModal);
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
