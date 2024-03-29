import { chatIDfromLocation } from "../../../../../consts";
import { ChatsModalProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";
import { ChatsController } from "../../../../../utils/controllers/chatsController";
import store from "../../../../../utils/store";
import { buildLeftPanel } from "../../../chat-list/chat-list";
import chatMainModalAvatar from "./chat-main-modal-avatar.hbs";

export class ChatsChangeAvatar extends Block<ChatsChangeAvatar> {
  public constructor(props: ChatsModalProps, classname?: string) {
    super("div", props, false, classname? classname : "modal");
    this.events = {
      submit: function (e: Event) {
        e.preventDefault();
        const input: HTMLInputElement = document.querySelector(
          "#changeChatAvatarModalInput"
        ) as HTMLInputElement;
        const submitMessage: HTMLElement = document.querySelector(
          "#result"
        ) as HTMLElement;
        const file = input.files ? input.files[0] : null;
        const chatID = chatIDfromLocation();
        let formdata = new FormData();
        formdata.append("chatId", `${chatID}`);
        if (!!file) {
          formdata.append("avatar", file);
        }

        const submit = new ChatsController();
        submit.changeChatAvatar(formdata).then((response: XMLHttpRequest) => {
          if (response.status == 200) {
            let adata = JSON.parse(response.response);
            buildLeftPanel();
            store.set("chat", adata);
          } else {
            submitMessage.textContent =
              "Ой! Что-то не так! Сервер пишет " +
              `${response.status} ${response.response}`;
          }
        });
      },
    };

    this.eventTarget = "form#changeChatAvatarForm";
  }

  public render() {
    return this.compile(chatMainModalAvatar, this.props);
  }
}
