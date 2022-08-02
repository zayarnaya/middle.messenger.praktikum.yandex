import { removeError } from "./remove-error";

export function checkPass(pass: HTMLInputElement, pass2: HTMLInputElement) {
  let errorMessage: HTMLElement = document.querySelector(`#${pass2.id} + span.errormessage`) as HTMLElement;
  if(!errorMessage) {return};

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
