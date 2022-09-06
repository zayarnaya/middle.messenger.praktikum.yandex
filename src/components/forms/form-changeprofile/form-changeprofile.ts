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
        const form: HTMLFormElement = document.querySelector(
          "form.form-changeprofile"
        ) as HTMLFormElement;
        const inputsRaw: HTMLCollectionOf<HTMLInputElement> =
          form.getElementsByTagName("input");
        let inputs: HTMLInputElement[] = Array.from(inputsRaw);

        let submitData: UserProps | {} = {};
        inputs.forEach((input) => {
          let name = input.id;
          let val = input.value;
          submitData[name] = val;
        });

        const submitChange = new UserProfileController();
        submitChange
          .changeProfile(submitData)
          .then((response) => {
            if (response.status == 200) {
              let adata = JSON.parse(response.response);
              store.set("user", adata);
              Object.entries(adata).forEach((entry) => {
                localStorage.setItem(`user_${entry[0]}`, entry[1] as string);
              });
            } else {
              submitMessage.textContent = "Что-то не так!" + response.response;
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
