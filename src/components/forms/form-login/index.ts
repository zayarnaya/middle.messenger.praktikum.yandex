
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { data } from "../../../data";
import { loginFormAll } from "./form-login";
import "./form-login.scss";
import { render } from "../../../utils/renderDOM";
import { validatorAll } from "../../../utils/validator/validator";
import { passValidator } from "../../../utils/validator/passValidator";


export function loginForm() {
    let inputs = Object.values(data.input.login);
    let theChildren = {};
    //let keys = [];
    for (let i = 0; i < inputs.length; i++) {
        let key = `input${i}`;
        let val = inputs[i];
        let obj = { [key]: new InputField(val) };


        Object.assign(theChildren, obj);

    }

    Object.assign(theChildren, { button: new Button(data.button.loginSubmit) });

    const form = new loginFormAll(theChildren);
    render(".messenger-wrapper", form);
    validatorAll();

}
