import { formForgotPass } from "./form-forgotpass";
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { data } from "../../../data";
import { render } from "../../../utils/renderDOM";

import "./form-forgotpass.scss";

export function forgotPassPage() {

    const form = new formForgotPass({
        input: new InputField(data.input.getNewPass.login),
        button: new Button(data.button.forgotpassSubmit)
    });
    render(".messenger-wrapper", form);

}

