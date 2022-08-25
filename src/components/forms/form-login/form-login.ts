import formLogin from "./form-login.hbs";
import { Form } from "../form";
import { FormProps } from "../../../types";
import "./form-login.scss";
import { LoginController } from "../../../utils/controllers/loginController";
import { HTTPTransport } from "../../../utils/http-transport";
import { LoginAPI } from "../../../utils/api/login-api";


export class loginFormAll extends Form {
  public constructor(propsAndChildren: FormProps) {
    super(propsAndChildren, "div");
    this.events = {
      submit: (e: Event) => {
        e.preventDefault();
        this.isValid = this.checkInputsValidity(this.inputs);
        let submitMessage: HTMLElement =
          document.querySelector(".submit-message") as HTMLElement;
        if (!this.isValid) {
          submitMessage.textContent = "Заполните все нужные поля";
        } else if (!!this.isValid) {
          submitMessage.textContent = "Успешно!";
          const log = new LoginController;
          const form: HTMLFormElement = document.querySelector(".form-login") as HTMLFormElement;
          const formData = new FormData(form);
          let data = {};
          formData.forEach((value, key) => {
            data[key] = value;
          });
          const json = JSON.stringify(data);
          const API = new LoginAPI;
          //API.request(json);
          //.then(response => console.log(response.status, response.responseText, "RESPONSE"));

          log.login(json); //работает, надо потом разобраться с типами
          /*
          const HTTP = new HTTPTransport;
          HTTP.post("https://ya-praktikum.tech/api/v2/auth/signin", {data: json})
          .then(response => console.log(response.status, response.responseText, "RESPONSE"));
          console.log("УШЛО?");
          */
        }

      } 
    }
  }

  public render() {
    return this.compile(formLogin, {});
  }
}
