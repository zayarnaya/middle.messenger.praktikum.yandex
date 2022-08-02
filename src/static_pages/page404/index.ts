import { data } from "../../data";
import error from "../error.hbs";
//import template = require("./../error.hbs");
import "./../error.scss";
import { Block } from "../../utils/block";
import { EventBus } from "../../utils/event-bus";
import { Error } from "..";

export const error404 = new Error(data.errors[404]);
/*
export function error404() {
  let wrap: HTMLElement = document.querySelector(".messenger-wrapper") as HTMLElement;
  let error: Record<string, string> = data.errors[404];

  if(!wrap || !error) {return;};

  wrap.innerHTML = template(error);
}
*/
