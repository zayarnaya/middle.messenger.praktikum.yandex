import { UserProps } from "../../../APItypes";
import { filePrefix } from "../../../consts";
import { AvatarController } from "../../../utils/controllers/avatarController";
import store, { StoreEvents } from "../../../utils/store";
import { ImageAvatar } from "../../avatars/img-avatar/img-avatar";
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { Form } from "../form";
import changeAvatar from "./form-changeavatar.hbs";
import "./form-changeavatar.scss";

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
          ".result-message"
        ) as HTMLElement;
        const input: HTMLInputElement = document.querySelector(
          "#avatar"
        ) as HTMLInputElement;
        const submitChange = new AvatarController();
        const file = input.files ? input.files[0] : null;
        let formdata = new FormData();
        if (!!file) {
          formdata.append("avatar", file);
        }

        submitChange.change(formdata).then((response: XMLHttpRequest) => {
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
      const user: UserProps = store.getState().user as UserProps;
      const children: {
        avatar: ImageAvatar;
        input: InputField;
        button: Button;
      } = this.children as {
        avatar: ImageAvatar;
        input: InputField;
        button: Button;
      };
      children.avatar.setProps({
        avatar: `${filePrefix}${user.avatar}`,
      });
    });
  }

  public render() {
    return this.compile(changeAvatar, this.props);
  }
}
