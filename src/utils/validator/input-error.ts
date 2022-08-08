export function inputError(field: HTMLInputElement, checkEmpty?: boolean) {
  console.log("ПРОВЕРКА");
  let message: HTMLElement = document.querySelector(`#${field.id} + span.errormessage`) as HTMLElement;
  console.log(message);
  console.log(field.id);
  const patterns: Record<string, string> = {
    login: "^[\\d\\w\\-]*[a-zA-Z]+[\\d\\w\\-]*$",
    /*
    от 3 до 20 символов, латиница, может содержать цифры, 
    но не состоять из них, без пробелов, без спецсимволов 
    (допустимы дефис и нижнее подчёркивание)
    */
    first_name: "^([A-ZА-ЯЁ]+)[a-zA-ZА-Яа-яЁё\\-]*$",
    second_name: "^([A-ZА-ЯЁ]+)[a-zA-ZА-Яа-яЁё\\-]*$",
    /*
    латиница или кириллица, первая буква должна быть заглавной, 
    без пробелов и без цифр, нет спецсимволов (допустим только дефис).
    */
    email: "^[\\w\\d]+@\\w+\\.\\w+",
    /*
    латиница, может включать цифры и спецсимволы вроде дефиса, 
    обязательно должна быть «собака» (@) и точка после неё, 
    но перед точкой обязательно должны быть буквы.
    */
    phone: "^\\+?\\d{10,15}$",
    /*
    от 10 до 15 символов, состоит из цифр, может начинается с плюса.
    */
    password: "^(?=.*[A-Z])(?=.*\\d).{8,40}$",
    newPassword: "^(?=.*[A-Z])(?=.*\\d).{8,40}$",
    
    /*
    от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.
    */
    message: ".*"
    /*
    Не должно быть пустым
    */

  };

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
        console.log("EMPTY");
        message.textContent = "Введите пароль";
        break;
    };
    return false;
    console.log(field, pattern);
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
        console.log(field, pattern);
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
    console.log(message, "MESSAGE");
    message.textContent = "";
    return true;
  }

}
