import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { data } from "../../../data";
import { loginFormAll } from "./form-login";
import { MultiList } from "../../multi-list/multi-list";
import "./form-login.scss";
import { render } from "../../../utils/renderDOM";
import { MultiListProps } from "../../../types";
import { router } from "../../../consts";
import store from "../../../utils/store";

export function loginForm() {
  let inputs: HTMLInputElement[] = Object.values(data.input.login);
  let theChildren: MultiListProps = {};

  theChildren = inputs.reduce((theChildren, item, i) => {
    theChildren[`input${i}`] = new InputField(item);
    return theChildren;
  }, {});

  const form = new loginFormAll({
    button: new Button(data.button.loginSubmit),
    inputList: new MultiList(
      theChildren,
      "div",
      "form-login__form-wrapper form col"
    ),
  });

  render(".messenger-wrapper", form);
  const a: HTMLLinkElement = document.getElementById("sign-up") as HTMLLinkElement;
  a.addEventListener("click", function(e: Event) {
    e.preventDefault();
    router.go(this.href);
    store.setNewLoc("newLoc", this.href);
    //store.set("newLoc", this.href);
  });
}
