import { Block } from "../../utils/block";
import inputRow from "./input-field.hbs";
import { inputValidation } from "../../utils/validator/input-validation";
import { InputFieldProps, Validity } from "../../types";
import "./input-field.scss";
import { checkPassMatch } from "../../utils/validator/check-pass-match";

export class InputField extends Block<InputFieldProps, InputField> {
  public isValid: Validity = "empty";

  public constructor(props: InputFieldProps) {
    super("div", props, false, "input-row row");
    this.events = {
      blur: () => {
        let input: HTMLInputElement = document.getElementById(
          this.props.name
        ) as HTMLInputElement;
        let errorMessage: HTMLElement = document.querySelector(
          `#${this.props.name} + span.errormessage`
        ) as HTMLElement;
        let validityState: Validity = inputValidation(input, true);

        if (validityState != "true") {
          this.isValid = validityState;
          this.showError(input, errorMessage, this.isValid);
        } else if (validityState == "true") {
          this.isValid = "true";
          this.removeError(input, errorMessage);
        }
      },

      focus: () => {
        let input: HTMLInputElement = document.getElementById(
          this.props.name
        ) as HTMLInputElement;
        let errorMessage: HTMLElement = document.querySelector(
          `#${this.props.name} + span.errormessage`
        ) as HTMLElement;
        let validityState: Validity = inputValidation(input, true);

        if (validityState != "true") {
          this.isValid = validityState;
          this.showError(input, errorMessage, this.isValid);
        } else if (validityState == "true") {
          this.isValid = "true";
          this.removeError(input, errorMessage);
        }
      },
    };

    this.eventTarget = "input";

    if (!!this.props.checkPass) {
      Object.assign(this.events, {
        blur: () => {
          let input: HTMLInputElement = document.getElementById(
            this.props.name
          ) as HTMLInputElement;
          let inputCheck: HTMLInputElement = document.getElementById("password")
            ? (document.getElementById("password") as HTMLInputElement)
            : (document.getElementById("newPassword") as HTMLInputElement);
          let isMatch = checkPassMatch(input, inputCheck);
          let errorMessage: HTMLElement = document.querySelector(
            `#${this.props.name} + span.errormessage`
          ) as HTMLElement;

          if (!isMatch) {
            this.isValid = "noMatch";
            this.showError(input, errorMessage, this.isValid, inputCheck);
          }

          if (!!isMatch) {
            this.isValid = "true";
            this.removeError(input, errorMessage, inputCheck);
          }
        },
      });
    }
  }

  public render() {
    return inputRow(this.props, this.events);
  }

  public showError(
    input: HTMLInputElement,
    errorMessage: HTMLElement,
    isValid: Validity,
    inputCheck?: HTMLInputElement
  ) {
    if (isValid == "empty") {
      switch (input.id) {
        case "login":
          errorMessage.textContent = "Введите логин";
          break;
        case "first_name":
          errorMessage.textContent = "Напишите свое имя";
          break;
        case "second_name":
          errorMessage.textContent = "Напишите фамилию";
          break;
        case "email":
          errorMessage.textContent = "Введите email";
          break;
        case "phone":
          errorMessage.textContent = "Введите номер телефона (10 цифр)";
          break;
        case "password":
        case "oldPassword":
        case "newPassword":
        case "newPassword2":
          errorMessage.textContent = "Введите пароль";
          break;
        case "message":
          errorMessage.textContent = "Сообщение не должно быть пустым";
          break;
      }
    } else if (isValid == "wrong") {
      switch (input.id) {
        case "login":
          errorMessage.textContent = "Латиница, допустимы цифры, - и _";
          break;
        case "first_name":
          errorMessage.textContent =
            "Латиница или кириллица, без пробелов и символов, первая буква заглавная";
          break;
        case "second_name":
          errorMessage.textContent =
            "Латиница или кириллица, без пробелов и символов, первая буква заглавная";
          break;
        case "email":
          errorMessage.textContent = "Введите корректный email";
          break;
        case "phone":
          errorMessage.textContent = "Введите номер телефона (10-15 цифр)";
          break;
        case "password":
        case "oldPassword":
        case "newPassword":
        case "newPassword2":
          errorMessage.textContent =
            "От 8 до 40 символов, минимум 1 заглавная буква и 1 цифра";
          break;
      }
    } else if (isValid == "noMatch" && !!inputCheck) {
      errorMessage.textContent = "Пароли не совпадают";
      input.classList.add("color-red");
      inputCheck.classList.add("color-red");
    }
  }

  public removeError(
    input: HTMLInputElement,
    errorMessage: HTMLElement,
    inputCheck?: HTMLInputElement
  ) {
    errorMessage.textContent = "";
    if (!!inputCheck) {
      input.classList.remove("color-red");
      inputCheck.classList.remove("color-red");
    }
  }
}
