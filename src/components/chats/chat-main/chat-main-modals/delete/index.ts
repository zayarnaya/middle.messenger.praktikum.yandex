import { render } from "../../../../../utils/renderDOM";
import { Button } from "../../../../buttons/button-submit/button";
import "./../chat-main-modals.scss";
import { ChatsDeleteChat } from "./chat-main-modals-delete";

export function deleteChatModal() {
  const deleteModal = new ChatsDeleteChat({
    button: new Button({
      name: "deleteChat",
      label: "Удалить чат",
      type: "submit",
    }),
  });

  render(".modal-place", deleteModal);
}
