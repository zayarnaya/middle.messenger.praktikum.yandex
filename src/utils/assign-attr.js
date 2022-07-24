import { seekAttributes } from "./seek-attr.js";
import { data } from "./../data.js";

export function assignAttr(formname) {
  let prefix;
  switch (formname) {
    case "signin":
      prefix = data.input.signin;
      break;

    case "login":
      prefix = data.input.login;
      break;
  }

  let attrs = Object.entries(prefix);
  attrs.forEach((element) => seekAttributes(element));
}
