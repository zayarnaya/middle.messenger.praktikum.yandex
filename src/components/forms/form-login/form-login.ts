import formLogin from "./form-login.hbs";
import { Form } from "../form";
import { FormProps } from "../../../types";
import "./form-login.scss";
import { UserAuthController } from "../../../utils/controllers/userAuthController";
import { router } from "../../../consts";
import { inputValidation } from "../../../utils/validator/input-validation";

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
          const inputlist = document.querySelectorAll("input");
          console.log(inputlist.length);
          let truecounts = 0;
          for(let i = 0; i < inputlist.length; i++) {
            if(inputValidation(inputlist[i], true) == "true") {
              truecounts += 1;
            }
          };
          if(truecounts == inputlist.length) {
            this.isValid = true;
          } else if(truecounts < inputlist.length) {
            submitMessage.textContent = "Заполните все нужные поля";
            return;
          }          
        }; 
        
        if (!!this.isValid) {
          const login = new UserAuthController();
          const form: HTMLFormElement = document.querySelector(
            ".form-login"
          ) as HTMLFormElement;
          const formData = new FormData(form);
          let data: any = {};
          formData.forEach((value, key) => {
            data[key] = value;
          });
          let sendData: {
            login: string;
            password: string;
          } = data as {
            login: string;
            password: string;
          };
          login.login(sendData).then((response: XMLHttpRequest) => {
            if (response.status == 200) {
              router.go("/messenger");
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
