import { data } from "./../../data.js";
import template from "./../error.hbs";
import "./../error.scss";

export function error500() {
  document.querySelector(".messenger-wrapper").innerHTML = template(
    data.errors[500]
  );
}
