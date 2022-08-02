import { checkInput } from "./check-input";

export function validatorAll() {
  let form = document.querySelector("form");
  if(!form) {return};
  let inputs = Array.from(document.getElementsByTagName("input"));
  if(!inputs) {return};

  inputs.forEach((element) => element.addEventListener("focus", this.checkInput));//а будет ли работать с this?
  inputs.forEach((element) => element.addEventListener("blur", this.checkInput));
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    inputs.forEach((element) => checkInput(element));
  });
}
