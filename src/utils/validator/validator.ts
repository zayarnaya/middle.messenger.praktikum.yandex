//import { checkInput } from "./check-input";
import { submitError } from "./submit-error";
import { inputError } from "./input-error";

export function validatorAll() {
  let form = document.querySelector("form");
  if(!form) {return};
  let inputs = Array.from(document.getElementsByTagName("input"));
  if(!inputs) {return};

  //inputs.forEach((element) => element.addEventListener("focus", checkInput));//а будет ли работать с this?
  //inputs.forEach((element) => element.addEventListener("blur", checkInput));
  inputs.forEach((element) => element.addEventListener("blur", function() {
    inputError(element);
  }));
  inputs.forEach((element) => element.addEventListener("focus", function() {
    inputError(element);
  }));
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    submitError();
  });
}
