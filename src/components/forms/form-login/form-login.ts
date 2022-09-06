import formLogin from "./form-login.hbs";
import { Form } from "../form";
import { FormProps } from "../../../types";
import "./form-login.scss";
import { UserAuthController } from "../../../utils/controllers/userAuthController";
import { router } from "../../../consts";
import store from "../../../utils/store";

export class loginFormAll extends Form {
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
          //submitMessage.textContent = "Успешно!";

          const login = new UserAuthController();
          const form: HTMLFormElement = document.querySelector(
            ".form-login"
          ) as HTMLFormElement;
          const formData = new FormData(form);
          let data: {
            login: string,
            password: string
          } = {};
          formData.forEach((value, key) => {
            data[key] = value;
          });
          login.login(data)
          .then(response => {
            if(response.status == 200) {
                router.go("/messenger");
                //store.set("newLoc", "/messenger");
            }
        });
        }
      },
    };
  }

  public render() {
    return this.compile(formLogin, {});
  }
}
