import { data } from "../../../data";
import { Block } from "../../../utils/block";
import formGetNewPass from "./form-forgotpass.hbs";


export class formForgotPass extends Block {
    constructor() {
        super("div");
    }

    render() {
        return formGetNewPass();
    }
}

