import { data } from "./../data";
import error from "./error.hbs";
//import template = require("./../error.hbs");
import "./error.scss";
import { Block } from "../utils/block";
import { EventBus } from "../utils/event-bus";

export class Error extends Block {
  constructor(props) {
    super ("div", props);
    
  }

  render() {
    return error(this.props);
  }
}

/*
export function error404() {
  let wrap: HTMLElement = document.querySelector(".messenger-wrapper") as HTMLElement;
  let error: Record<string, string> = data.errors[404];

  if(!wrap || !error) {return;};

  wrap.innerHTML = template(error);
}
*/
