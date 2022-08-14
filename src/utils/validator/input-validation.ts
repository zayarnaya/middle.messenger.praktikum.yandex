import { patterns } from "../../consts";
import { Validity } from "../../types";

export function inputValidation(field: HTMLInputElement, checkEmpty?: boolean): Validity {
  let pattern: RegExp = new RegExp(patterns[field.name]);

  if (!!checkEmpty && field.value == "") {
    return "empty";

  } else if (!pattern.test(field.value)) {
    return "wrong";

  } else if (field.validity.valid && pattern.test(field.value) && field.id != "avatar") {
    return "true";
  }

}
