import { removeError } from "./remove-error";//тут был js

export function checkPass(pass, pass2) {
  let errorMessage = document.querySelector(`#${pass2.id} + span.errormessage`);

  if (pass.value != pass2.value) {
      pass.classList.add("color-red");
      pass2.classList.add("color-red");

      errorMessage.textContent = "Пароли не совпадают";
      errorMessage.classList.toggle("active");
  } else if (pass.value == pass2.value) {
      pass.classList.remove("color-red");
      pass2.classList.remove("color-red");
      
      removeError(errorMessage);
  };
}
