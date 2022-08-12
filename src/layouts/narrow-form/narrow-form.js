import template from "./narrow-form.hbs";

export function layoutNarrowForm() {
  document.querySelector(".messenger-wrapper").innerHTML = template();
}
