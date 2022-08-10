import formSignin from "./form-signin.hbs";
import "./form-signin.scss";
import { Form } from "../form";


export class signinFormAll extends Form {
    constructor(propsAndChildren: Record<string, any>) {
        super("div", propsAndChildren);
    }

    render() {
        return this.compile(formSignin, {});
    }
}
