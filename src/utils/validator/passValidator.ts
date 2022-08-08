import { checkPass } from "./check-pass";

export function passValidator(formname: string) {
  let pass: HTMLInputElement;
  let passAgain: HTMLInputElement;

  switch (formname) {
    case "signin":
      pass = document.querySelector("#password");
      passAgain = document.querySelector("#password_check");
      break;

    case "change_signin":
      pass = document.querySelector("#newPassword");
      passAgain = document.querySelector("#newPassword2");
  };

  passAgain.addEventListener("input", function () {
    checkPass(pass, passAgain);
  });
}
