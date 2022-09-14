import formSignin from "./form-signin.hbs";
import "./form-signin.scss";
import { Form } from "../form";
import { FormProps } from "../../../types";
import { UserAuthController } from "../../../utils/controllers/userAuthController";
import { UserProps } from "../../../APItypes";
import { router } from "../../../consts";

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
          const signUp = new UserAuthController();

          const form: HTMLFormElement = document.querySelector(
            ".form-signin"
          ) as HTMLFormElement;
          const formData = new FormData(form);
          let data: UserProps = {};
          formData.forEach((value, key) => {
            data[key] = value;
          });

          signUp.signUp(data).then((response: XMLHttpRequest) => {
            if (response.status == 200) {
              router.go("/messenger");
            }
          });
        }
      },
    };
  }

  public render() {
    return this.compile(formSignin, {});
  }
}
