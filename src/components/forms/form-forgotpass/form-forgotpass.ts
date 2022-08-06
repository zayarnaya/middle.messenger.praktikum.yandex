import { data } from "../../../data";
import { Block } from "../../../utils/block";
import formGetNewPass from "./form-forgotpass.hbs";
//import "./form-forgotpass.scss";


export class formForgotPass extends Block {
    constructor(events) {
        super("div", events);
    }

    render() {
        return formGetNewPass();
    }
}

