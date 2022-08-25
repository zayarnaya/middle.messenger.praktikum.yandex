import { render } from "../../../../../utils/renderDOM";
import { Button } from "../../../../buttons/button-submit/button";
import { InputField } from "../../../../input/input-field";
import "./../chat-main-modals.scss";
import { ChatsUserSearch } from "./chat-main-modals-search";



export function userSearchModal() {
    const searchModal = new ChatsUserSearch ({
        searchInput: new InputField({
            type: "search",
            placeholder: "Поиск по логину",
            name: "userSearchModalInput"
        }),
        button: new Button({
            name: "userSearchSubmit",
            label: "Искать",
            type: "submit",

        })
    });

    render(".modal-place", searchModal);
    document.getElementById("close-button").addEventListener("click", function() {document.getElementById("modal-place").textContent = "";});

}

