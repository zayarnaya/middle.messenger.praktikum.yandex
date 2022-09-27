import { chatIDfromLocation, router } from "../../../../../consts";
import { ChatsModalProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";
import { ChatsController } from "../../../../../utils/controllers/chatsController";
import store from "../../../../../utils/store";
import chatMainModalDelete from "./chat-main-modal-delete.hbs";

export class ChatsDeleteChat extends Block<ChatsDeleteChat> {
  public constructor(props: ChatsModalProps, classname?: string) {
    super("div", props, false, classname ? classname : "modal");

    this.events = {
      submit: function (e: Event) {
        e.preventDefault();
        const resultField: HTMLElement = document.getElementById(
          "result"
        ) as HTMLElement;
        const deleteChat = new ChatsController();
        const chatID = chatIDfromLocation();
        deleteChat
          .delete({
            chatId: Number(chatID),
          })
          .then((response: XMLHttpRequest) => {
            if (response.status == 200) {
              resultField.textContent = "Удалили чат!";
              router.go("/messenger");
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

  public render() {
    return this.compile(chatMainModalDelete, this.props);
  }
}
