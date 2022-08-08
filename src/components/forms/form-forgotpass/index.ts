import { formForgotPass } from "./form-forgotpass";
import { Button } from "../../buttons/button-submit/button";

import { InputField } from "../../input/input-field";

import { data } from "../../../data";
import { getData } from "../../../utils/form-actions/get-data";
import { render } from "../../../utils/renderDOM";
import { submitError } from "../../../utils/validator/submit-error";

import "./form-forgotpass.scss";

export function forgotPassPage() {

    const form = new formForgotPass({
        input: new InputField(data.input.getNewPass.login),
        button: new Button(data.button.forgotpassSubmit)
    });
    render(".messenger-wrapper", form);
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        getData();
    })
}

