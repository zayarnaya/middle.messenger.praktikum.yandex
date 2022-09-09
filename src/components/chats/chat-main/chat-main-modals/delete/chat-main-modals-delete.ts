import { chatIDfromLocation, router } from "../../../../../consts";
import { ChatsModalProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";
import { ChatsController } from "../../../../../utils/controllers/chatsController";
import store from "../../../../../utils/store";
import { buildRightPanel } from "../../chat-main";
import chatMainModalDelete from "./chat-main-modal-delete.hbs";

export class ChatsDeleteChat extends Block<ChatsDeleteChat> {
  public constructor(props: ChatsModalProps, classname?: string) {
    super("div", props, false, (classname = "modal"));

    this.events = {
      submit: function (e: Event) {
        e.preventDefault();
        const resultField: HTMLElement = document.getElementById("result") as HTMLElement;
        const deleteChat = new ChatsController();
        const chatID = chatIDfromLocation();
        deleteChat.delete({
          chatId: Number(chatID)
        })
        .then((response) => {
          if (response.status == 200) {
            resultField.textContent = "Удалили чат!";
            router.go("/messenger");
            //buildRightPanel();
            store.set("someAction", true);
          } else {
            resultField.textContent =
              "Не удалось! Сервер говорит " + `${response.response}`;
          }
        });
      },
    };

    this.eventTarget = "form#deleteChat";
  }

  //   this.events = {
  //     click: () => {
  //       const modal: HTMLElement = document.getElementById(
  //         "modal-place"
  //       ) as HTMLElement;
  //       modal.textContent = "";
  //     },
  //   };

  //   this.eventTarget = "#close-button";
  // }

  public render() {
    return this.compile(chatMainModalDelete, this.props);
  }
}
