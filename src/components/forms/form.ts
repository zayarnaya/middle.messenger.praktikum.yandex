import { Block } from "../../utils/block";
import { FormProps } from "../../types";
import { InputField } from "../input/input-field";
import { getData } from "../../utils/form-actions/get-data";

export class Form extends Block<FormProps, Form> {
  public isValid: boolean = false;
  public inputs: InputField[];

  public constructor(
    props: FormProps,
    tag?: string,
    classname?: string
  ) {
    super(tag, props, false, classname);

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
          /*
          switch (location.hash) {
            case "#login":
              submitMessage.textContent = "Успешно! Сейчас загрузим чаты";
              break;
            case "#signin":
              submitMessage.textContent =
                "Вы успешно зарегистрировались, переходим на страницу входа";
              break;
            case "#changepass":
              submitMessage.textContent =
                "Вы поменяли пароль. Возвращаемся в профиль";
              break;
            case "#forgotpass":
              submitMessage.textContent =
                "Пароль будет отправлен на вашу почту";
              break;
            default:
              submitMessage.textContent = "Успешно! Сейчас загрузим чаты";
              break;
          }*/
          //getData();
        }
      },
    };

    this.eventTarget = "form";

    if (!!props.inputList) {
      this.inputs = Object.values(
        props.inputList.children as Record<string, InputField>
      );
    } else if (!!props.input) {
      this.inputs = [props.input];
    }
  }

  public checkInputsValidity(inputs: InputField[]): boolean {
    let result: boolean[] = [];
    inputs.forEach((input) => {
      if (input.isValid == "true") {
        result.push(true);
      } else if (
        input.isValid == "empty" ||
        input.isValid == "wrong" ||
        input.isValid == "noMatch"
      ) {
        result.push(false);
      }
    });
    if (!!result.includes(false)) {
      return false;
    } else if (!result.includes(false)) {
      return true;
    }
    return false; //надо проверить все ли правильно
  }
}
