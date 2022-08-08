import { data } from "../../../data";
import { Block } from "../../../utils/block";
import { Form } from "../form";
import formGetNewPass from "./form-forgotpass.hbs";
//import "./form-forgotpass.scss";


export class formForgotPass extends Form {
    constructor(events) {
        super("div", events);
    }

    render() {
        return formGetNewPass();
    }
}

