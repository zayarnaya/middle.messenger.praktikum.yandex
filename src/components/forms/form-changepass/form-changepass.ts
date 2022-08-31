import changePass from "./form-changepass.hbs";
import { formChangePassProps } from "../../../types";
import "./form-changepass.scss";
import { Form } from "../form";
import { UserProfileController } from "../../../utils/controllers/userProfileController";

export class formChangePass extends Form {
  public constructor(propsAndChildren: formChangePassProps) {
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
          
          let changepass = new UserProfileController;
          let oldPassField: HTMLInputElement = document.getElementById("oldPassword") as HTMLInputElement;
          let newPassField: HTMLInputElement = document.getElementById("newPassword") as HTMLInputElement;
          let sendData = {
            oldPassword: oldPassField.value,
            newPassword: newPassField.value
          }
          let outData = JSON.stringify(sendData);

          // data: {
          //   oldPassword: string,
          //   newPassword: string
          // }
          changepass.changePass(outData)
          .then(response => 
            {
              if(response.status == 200) {
                submitMessage.textContent = "Успешно!";
              } else {
                submitMessage.textContent = "Ой! Не получилось. Сервер говорит " + `${response.status} ${response.response}`;
              }
            });

        }
      }
    }
    this.eventTarget = "form.change-pass";
  }

  public render() {
    return this.compile(changePass, this.props);
  }
}
