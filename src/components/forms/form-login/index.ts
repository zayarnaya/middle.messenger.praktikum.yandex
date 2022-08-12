
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { data } from "../../../data";
import { loginFormAll } from "./form-login";
import { MultiList } from "../../multi-list/multi-list";
import "./form-login.scss";
import { render } from "../../../utils/renderDOM";


export function loginForm() {
    let inputs = Object.values(data.input.login);
    let theChildren: Object = {};

    for (let i = 0; i < inputs.length; i++) {
        let key = `input${i}`;
        let val = inputs[i];
        theChildren[key] = new InputField(val);
    }

    const form = new loginFormAll({
        button: new Button(data.button.loginSubmit),
        inputList: new MultiList(theChildren, "div", "form-login__form-wrapper form col")
    });
    render(".messenger-wrapper", form);
}
