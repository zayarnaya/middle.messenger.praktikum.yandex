import { ChatsProps } from "../../../APItypes";
import { chatIDfromLocation, filePrefix } from "../../../consts";
import { ChatsController } from "../../../utils/controllers/chatsController";
import store, { StoreEvents } from "../../../utils/store";
import { ImageAvatar } from "../../avatars/img-avatar/img-avatar";
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { Form } from "../form";
import changeAvatar from "./form-changechatavatar.hbs";

type FormChangeAvatarProps = {
  avatar: ImageAvatar;
  input: InputField;
  button: Button;
};

export class FormChangeAvatar extends Form {
  public constructor(props: FormChangeAvatarProps) {
    super(props);
    this.events = {
      submit: async (e: Event) => {
        e.preventDefault();
        const chatID: string = `${chatIDfromLocation()}`;
        const submitMessage: HTMLElement = document.querySelector(
          ".submit-message"
        ) as HTMLElement;
        const input: HTMLInputElement = document.querySelector(
          "#avatar"
        ) as HTMLInputElement;
        const file = input.files ? input.files[0] : null;
        const submitChange = new ChatsController();
        let formdata = new FormData();
        formdata.append("chatId", chatID);
        if (!!file) {
          formdata.append("avatar", file);
        };

        submitChange.changeChatAvatar(formdata).then((response: XMLHttpRequest) => {
          if (response.status == 200) {
            let adata = JSON.parse(response.response);
            store.set("chat", adata);
          } else {
            submitMessage.textContent =
              "Ой! Что-то не так! Сервер пишет " +
              `${response.status} ${response.response}`;
          }
        });
      },
    };

    this.eventTarget = "changeChatAvatar";

    store.on(StoreEvents.Updated, () => {
      const chat: ChatsProps = store.getState().chat as ChatsProps;
      const children: {
        avatar: ImageAvatar,
        input: InputField,
        button: Button,
      } = this.children as {
        avatar: ImageAvatar,
        input: InputField,
        button: Button,
      };
      children.avatar.setProps({
        avatar: `${filePrefix}${chat.avatar}`,
      });
    });
  }

  public render() {
    return this.compile(changeAvatar, this.props);
  }
}
