import { Block } from "../../../utils/block";
import changePass from "./form-changepass.hbs";

import "./form-changepass.scss";


export class formChangePass extends Block {
    constructor(propsAndChildren: Object) {
        super("div", propsAndChildren);
    }

    render() {
        return this.compile(changePass, {});
    }
}
