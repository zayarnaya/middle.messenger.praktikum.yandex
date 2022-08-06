import { formForgotPass } from "./form-forgotpass";
import { Button } from "../../buttons/button-submit/button";

import { data } from "../../../data";
import { getData } from "../../../utils/form-actions/get-data";
import { render } from "../../../utils/renderDOM";

export function forgotPassPage() {
    console.log('000');
    const form = new formForgotPass();
    render(".messenger-wrapper", form);

    const props = data.button.forgotpassSubmit;
    const events = {
        events: {
            submit: getData,
        }
    };
    Object.assign(props, events);
    console.log(props);

    const button = new Button(props);
    render(".submit-button", button);
    //console.log(document.querySelector(".submit-button"));


}

