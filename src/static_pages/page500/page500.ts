import { data } from "../../data";
import template from "../error.hbs";
import "./../error.scss";

export function error500() {
  if(!document.querySelector(".messenger-wrapper") || !data.errors) {return}
  document.querySelector(".messenger-wrapper").innerHTML = template(
    data.errors[500]
  );
}
