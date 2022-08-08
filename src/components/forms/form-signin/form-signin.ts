
import { Block } from "../../../utils/block";
import formSignin from "./form-signin.hbs";
import "./form-signin.scss";


export class signinFormAll extends Block {
    constructor(propsAndChildren) {
        super("div", propsAndChildren);

    }

    render() {

        return this.compile(formSignin, {});
    }
}
