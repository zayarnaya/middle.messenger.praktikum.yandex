import { chatsPage } from "../../..";
import { router } from "../../../../../consts";
import { ChatsModalProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";
import { ChatsController } from "../../../../../utils/controllers/chatsController";
import store from "../../../../../utils/store";
import chatMainModalCreate from "./chat-main-modal-create.hbs";

export class ChatsCreateChat extends Block<ChatsCreateChat> {
  public constructor(props: ChatsModalProps, classname?: string) {
    super("div", props, false, (classname = "modal"));
    this.events = {
      submit: function (e: Event) {
        e.preventDefault();
        const input: HTMLInputElement = document.getElementById(
          "createChatModalInput"
        ) as HTMLInputElement;
        const inputData = { title: input.value };

        const seek = new ChatsController();
        seek.create(inputData).then((response) => {
          const resultField: HTMLElement = document.getElementById(
            "result"
          ) as HTMLElement;
          if (response.status == 200) {
            resultField.textContent =
              "Чат успешно создан! " + response.response;
              const id = JSON.parse(response.response).id;
              router.use(`/messenger/#${id}`, chatsPage)
              .go(`/messenger/#${id}`);
              //router.go(`/messenger/#${id}`);
              //chatsPage();
              store.set("chat", inputData);
          } else {
            resultField.textContent =
              "Что-то не получилось! " + response.response;
          }
        });
      },
    };

    this.eventTarget = "form";
  }

  public render() {
    return this.compile(chatMainModalCreate, this.props);
  }
}
