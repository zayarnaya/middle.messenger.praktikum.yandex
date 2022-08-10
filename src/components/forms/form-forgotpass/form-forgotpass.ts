import { Form } from "../form";

import formGetNewPass from "./form-forgotpass.hbs";
export class formForgotPass extends Form {
    constructor(propsAndChildren: Object) {
        super("div", propsAndChildren);
    }

    render() {
        return this.compile(formGetNewPass, {});
    }
}

