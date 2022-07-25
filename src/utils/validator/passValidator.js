import { checkPass } from "./check-pass.js";

export function passValidator(formname) {
  let pass;
  let passAgain;

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
