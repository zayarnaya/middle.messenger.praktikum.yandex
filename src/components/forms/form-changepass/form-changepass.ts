import { data } from "../../../data";
import { Block } from "../../../utils/block";
import changePass from "./form-changepass.hbs";

import "./form-changepass.scss";


export class formChangePass extends Block {
    constructor(propsAndChildren) {
        super("div", propsAndChildren);
        //this.events = propsAndChildren.events;
    }

    render() {

        return this.compile(changePass, {});
    }
}
