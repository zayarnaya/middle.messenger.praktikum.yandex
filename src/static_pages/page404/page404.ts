import { data } from "../../data";
import template from "./../error.hbs";
//import template = require("./../error.hbs");
import "./../error.scss";

export function error404() {
  let wrap: HTMLElement = document.querySelector(".messenger-wrapper") as HTMLElement;
  let error: Record<string, string> = data.errors[404];

  if(!wrap || !error) {return;};

  wrap.innerHTML = template(error);
}
