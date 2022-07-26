import template from "./narrow-form.hbs";

export function layout_narrowForm() {
  document.querySelector(".messenger-wrapper").innerHTML = template();
}
