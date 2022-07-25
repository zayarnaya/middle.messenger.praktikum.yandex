import template from "./wide-form.hbs";
import "./wide-form.scss";

export function layout_wideForm() {
  document.querySelector(".messenger-wrapper").innerHTML = template();
}
