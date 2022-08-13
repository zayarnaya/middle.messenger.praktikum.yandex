import { Block } from "../../../utils/block";
import changePass from "./form-changepass.hbs";
import { formChangePassProps } from "../../../types";

import "./form-changepass.scss";


export class formChangePass extends Block<formChangePassProps, formChangePass> {
    public constructor(propsAndChildren: formChangePassProps) {
        super("div", propsAndChildren);
    }

    public render() {
        return this.compile(changePass, this.props);
    }
}
