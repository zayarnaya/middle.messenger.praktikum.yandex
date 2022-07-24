export function showError(field, message) {
  if (field.validity.valueMissing) {
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
        message.textContent = "Введите пароль";
        break;
    }
  } else if (field.validity.tooLong) {
    message.textContent = `Не более ${field.maxLength} знаков`;
  } else if (field.validity.patternMismatch) {
    switch (field.id) {
      case "login":
        message.textContent = "Только латинские буквы";
        break;
      case "phone":
        message.textContent = "Введите номер телефона - 10 цифр";
        break;
    }
  } else if (field.validity.typeMismatch) {
    message.textContent = "Введите корректный email";
  }

  message.classList.toggle("active");
}
