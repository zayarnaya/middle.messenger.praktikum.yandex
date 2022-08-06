import { formForgotPass } from "./form-forgotpass";
import { Button } from "../../buttons/button-submit/button";

import { InputField } from "../../input/input-field";

import { data } from "../../../data";
import { getData } from "../../../utils/form-actions/get-data";
import { render } from "../../../utils/renderDOM";
import { submitError } from "../../../utils/validator/submit-error";

import "./form-forgotpass.scss";

export function forgotPassPage() {
    console.log('000');
    const events = {
        events: {
        submit: event => {
            event.preventDefault();
            console.log(event);
            submitError();

          },
        }
    };
    const form = new formForgotPass(events);
    render(".messenger-wrapper", form);

    console.log(data.input.getNewPass.login);
    const input = new InputField(data.input.getNewPass.login);
    render(".input-list", input);



    const props = data.button.forgotpassSubmit;
    //Object.assign(props, events);
    //console.log(props);

    const button = new Button(props);
    render(".submit", button);
    //console.log(document.querySelector(".submit-button"));

    //document.querySelector("form").addEventListener("submit", )


}

