import { seekAttributes } from "./seek-attr";
import { data } from "../data";

export function assignAttr(formname: string) {
  let prefix; //тут какой тип?

  switch (formname) {
    case "signin":
      prefix = data.input.signin;
      break;

    case "login":
      prefix = data.input.login;
      break;

    case "changeprofile":
      prefix = data.input.change_profile;
      break;
  };

  let attrs = Object.entries(prefix);
  attrs.forEach((element) => seekAttributes(element));
}
