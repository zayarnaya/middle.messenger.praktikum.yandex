import formLogin from "./form-login.hbs";
import { Form } from "../form";

import "./form-login.scss";

export class loginFormAll extends Form {
    constructor(propsAndChildren: Object) {
        super("div", propsAndChildren);

    }

    render() {
        return this.compile(formLogin, {});
    }
}
