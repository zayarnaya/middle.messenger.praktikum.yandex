import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { data } from "../../../data";
import { signinFormAll } from "./form-signin";
import { MultiList } from "../../multi-list/multi-list";
import "./form-signin.scss";
import { render } from "../../../utils/renderDOM";
import { passValidator } from "../../../utils/validator/passValidator";


export function signinForm() {
    let inputs = Object.values(data.input.signin);
    let theChildren = {};

    for (let i = 0; i < inputs.length; i++) {
        let key = `input${i}`;
        let val = inputs[i];
        theChildren[key] = new InputField(val);
    }

    const form = new signinFormAll({
        button: new Button(data.button.signinSubmit),
        inputList: new MultiList(theChildren, "div", "form-signin__form-wrapper col")
    });
    render(".messenger-wrapper", form);

    passValidator("signin");

}
