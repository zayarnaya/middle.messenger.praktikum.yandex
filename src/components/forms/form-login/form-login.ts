
import { data } from "../../../data";
import { Block } from "../../../utils/block";
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import formLogin from "./form-login.hbs";
import { Form } from "../form";

import "./form-login.scss";


export class loginFormAll extends Form {
    constructor(propsAndChildren) {
        super("div", propsAndChildren);

    }

    render() {

        return this.compile(formLogin, {});
    }
}
