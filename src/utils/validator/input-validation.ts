import { patterns } from "../../consts";

export function inputValidation(field: HTMLInputElement, checkEmpty?: boolean) {
  let message: HTMLElement = document.querySelector(`#${field.id} + span.errormessage`) as HTMLElement;
  let pattern: RegExp = new RegExp(patterns[field.name]);

  if (checkEmpty && field.value == "") {
    switch (field.id) {
      case "login":
        message.textContent = "Введите логин";
        break;
      case "first_name":
        message.textContent = "Напишите свое имя";
        break;
      case "second_name":
        message.textContent = "Напишите фамилию";
        break;
      case "email":
        message.textContent = "Введите email";
        break;
      case "phone":
        message.textContent = "Введите номер телефона (10 цифр)";
        break;
      case "password":
      case "oldPassword":
      case "newPassword":
      case "newPassword2":
        message.textContent = "Введите пароль";
        break;
      case "message":
        message.textContent = "Сообщение не должно быть пустым";
        break;
    };
    return false;

  } else if (!pattern.test(field.value)) {
    switch (field.id) {
      case "login":
        message.textContent = "Латиница, допустимы цифры, - и _";
        break;
      case "first_name":
        message.textContent = "Латиница или кириллица, без пробелов и символов, первая буква заглавная";
        break;
      case "second_name":
        message.textContent = "Латиница или кириллица, без пробелов и символов, первая буква заглавная";
        break;
      case "email":
        message.textContent = "Введите корректный email";
        break;
      case "phone":
        message.textContent = "Введите номер телефона (10-15 цифр)";
        break;
      case "password":
      case "oldPassword":
      case "newPassword":
      case "newPassword2":
        message.textContent = "От 8 до 40 символов, минимум 1 заглавная буква и 1 цифра";
        break;
    };
    return false;
  } else if (field.validity.tooLong) {
    message.textContent = `Не более ${field.maxLength} знаков`;
    return false;

  } else if (field.validity.tooShort) {
    message.textContent = `Не менее ${field.minLength} знаков`;
    return false;

  } else if (field.validity.valid && pattern.test(field.value) && field.id != "avatar") {
    message.textContent = "";
    return true;
  }

}
