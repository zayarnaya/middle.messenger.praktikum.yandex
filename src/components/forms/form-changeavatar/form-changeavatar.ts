import { filePrefix } from "../../../consts";
import { APIurls, Methods } from "../../../types";
import { AvatarController } from "../../../utils/controllers/avatarController";
import { HTTPTransport } from "../../../utils/http-transport";
import store, { StoreEvents } from "../../../utils/store";
import { ImageAvatar } from "../../avatars/img-avatar/img-avatar";
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { Form } from "../form";
import changeAvatar from "./form-changeavatar.hbs";

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
        const submitMessage: HTMLElement = document.querySelector(
          ".submit-message"
        ) as HTMLElement;
        const form: HTMLFormElement = document.querySelector(
          "form.form__changeAvatar"
        ) as HTMLFormElement;
        const submitChange = new AvatarController();
        let formdata = new FormData(form);

        submitChange.change(formdata).then((response) => {
          if (response.status == 200) {
            let adata = JSON.parse(response.response);
            store.set("user", adata);
            localStorage.setItem("user_avatar", adata.avatar as string);
          } else {
            submitMessage.textContent =
              "Ой! Что-то не так! Сервер пишет " +
              `${response.status} ${response.response}`;
          }
        });
      },
    };

    this.eventTarget = "form.form__changeAvatar";

    store.on(StoreEvents.Updated, () => {
      this.children.avatar.setProps({
        avatar: `${filePrefix}${store.getState().user.avatar}`,
      });
    });
  }

  public render() {
    return this.compile(changeAvatar, this.props);
  }
}
