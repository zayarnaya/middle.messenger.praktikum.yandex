import { Block } from "../../../utils/block";
import changePass from "./form-changepass.hbs";
import { formChangePassProps } from "../../../types";

import "./form-changepass.scss";


export class formChangePass extends Block<formChangePassProps> {
    public constructor(propsAndChildren: formChangePassProps) {
        super("div", propsAndChildren);
    }

    public render() {
        return this.compile(changePass, {});
    }
}
