import { render } from "../../../../../utils/renderDOM";
import { Button } from "../../../../buttons/button-submit/button";
import { InputField } from "../../../../input/input-field";
import "./../chat-main-modals.scss";
import { ChatsUserSearch } from "./chat-main-modals-search";



export function userSearchModal() {
    const searchModal = new ChatsUserSearch ({
        input: new InputField({
            type: "search",
            placeholder: "Напишите логин",
            name: "userSearchModalInput"
        }),
        button: new Button({
            name: "userSearchSubmit",
            label: "Искать",
            type: "submit",
            class: "submit-button",

        })
    });

    render(".modal-place", searchModal);
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

