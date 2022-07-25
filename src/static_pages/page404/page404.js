import { data } from "./../../data.js";
import template from "./../error.hbs";
import "./../error.scss";

export function error404() {
  document.querySelector("main").innerHTML = template(data.errors[404]);
}
