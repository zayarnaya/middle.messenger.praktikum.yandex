import { Form } from "../form";
import { FormProps } from "../../../types";
import changeProfile from "./form-changeprofile.hbs";
import "./form-changeprofile.scss";
import { UserProfileController } from "../../../utils/controllers/userProfileController";
import store from "../../../utils/store";
import { UserProps } from "../../../APItypes";

export class ChangeUserProfile extends Form {
  public constructor(propsAndChildren: FormProps) {
    super(propsAndChildren, "div");
    Object.values(propsAndChildren.inputList.children).forEach((child) => {
      child.isValid = "true";
    });

    this.events = {
      submit: (e: Event) => {
        e.preventDefault();
        const submitMessage: HTMLElement = document.querySelector(
          ".submit-message"
        ) as HTMLElement;
        submitMessage.textContent = "";
        const form: HTMLFormElement = document.querySelector(
          "form.form-changeprofile"
        ) as HTMLFormElement;
        const inputsRaw: HTMLCollectionOf<HTMLInputElement> =
          form.getElementsByTagName("input");
        let inputs: HTMLInputElement[] = Array.from(inputsRaw);

        let submitData: UserProps | {} = {};
        inputs.forEach((input: HTMLInputElement) => {
          let name = input.id;
          let val = input.value;
          submitData[name] = val;
        });

        let sendData: {
          first_name: string;
          second_name: string;
          display_name: string;
          login: string;
          email: string;
          phone: string;
        } = submitData as {
          first_name: string;
          second_name: string;
          display_name: string;
          login: string;
          email: string;
          phone: string;
        };

        const submitChange = new UserProfileController();
        submitChange.changeProfile(sendData).then((response: XMLHttpRequest) => {

          if (response.status == 200) {
            submitMessage.textContent = "Изменения сохранены";
            let adata = JSON.parse(response.response);
            store.set("user", adata);
            Object.entries(adata).forEach((entry) => {
              localStorage.setItem(`user_${entry[0]}`, entry[1] as string);
            });
          } else {
            submitMessage.textContent = "Что-то не так! Сервер говорит " + response.response;
          }
        });
      },
    };

    this.eventTarget = "form.form-changeprofile";
  }

  public render() {
    return this.compile(changeProfile, {});
  }
}
