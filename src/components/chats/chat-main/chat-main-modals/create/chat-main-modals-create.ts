import { ChatsModalProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";
import { ChatSettingsController } from "../../../../../utils/controllers/chatSettingsController";
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
        const requestData = JSON.stringify(inputData);
        console.log(requestData);

        const seek = new ChatSettingsController();
        seek.create(requestData).then((response) => {
          const resultField: HTMLElement = document.getElementById(
            "result"
          ) as HTMLElement;
          if (response.status == 200) {
            resultField.textContent =
              "Чат успешно создан! " + response.response;
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
