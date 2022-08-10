
import { Block } from "../../../utils/block";
import formSignin from "./form-signin.hbs";
import "./form-signin.scss";
import { Form } from "../form";


export class signinFormAll extends Form {
    constructor(propsAndChildren) {
        super("div", propsAndChildren);

    }

    render() {
        console.log(formSignin, "ФУНКЦИЯ");

        return this.compile(formSignin, {});
    }
}
