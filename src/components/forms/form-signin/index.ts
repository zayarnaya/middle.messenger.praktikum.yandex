import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { data } from "../../../data";
import { signinFormAll } from "./form-signin";
import { MultiList } from "../../multi-list/multi-list";
import "./form-signin.scss";
import { render } from "../../../utils/renderDOM";
import { router } from "../../../consts";
import store from "../../../utils/store";

export function signinForm() {
  let inputs: HTMLInputElement[] = Object.values(data.input.signin);
  let theChildren: Record<string, InputField> = {};

  theChildren = inputs.reduce((theChildren, item, i) => {
    theChildren[`input${i}`] = new InputField(item);
    return theChildren;
  }, {});

  const form = new signinFormAll({
    button: new Button(data.button.signinSubmit),
    inputList: new MultiList(
      theChildren,
      "div",
      "form-signin__form-wrapper col"
    ),
  });
  render(".messenger-wrapper", form);
  const a: HTMLLinkElement = document.getElementById("login-link") as HTMLLinkElement;
  a.addEventListener("click", function(e: Event) {
    e.preventDefault();
    router.go(this.href);
    store.set("newLoc", this.href);
  });
}
