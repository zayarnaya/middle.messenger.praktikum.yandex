import formSignin from "./form-signin.hbs";
import "./form-signin.scss";
import { Form } from "../form";
import { FormProps } from "../../../types";
import { UserAuthController } from "../../../utils/controllers/userAuthController";

export class signinFormAll extends Form {
  public constructor(propsAndChildren: FormProps) {
    super(propsAndChildren, "div");
    this.events = {
      submit: (e: Event) => {
        e.preventDefault();
        this.isValid = this.checkInputsValidity(this.inputs);
        let submitMessage: HTMLElement = document.querySelector(
          ".submit-message"
        ) as HTMLElement;
        if (!this.isValid) {
          submitMessage.textContent = "Заполните все нужные поля";
        } else if (!!this.isValid) {
          submitMessage.textContent = "Успешно!";

          const signUp = new UserAuthController();

          const form: HTMLFormElement = document.querySelector(
            ".form-signin"
          ) as HTMLFormElement;
          const formData = new FormData(form);
          let data = {};
          formData.forEach((value, key) => {
            data[key] = value;
          });
          const json = JSON.stringify(data);

          signUp.signUp(json);
        }
      },
    };
  }

  public render() {
    return this.compile(formSignin, {});
  }
}
