import changePass from "./form-changepass.hbs";
import { formChangePassProps } from "../../../types";
import "./form-changepass.scss";
import { Form } from "../form";

export class formChangePass extends Form {
  public constructor(propsAndChildren: formChangePassProps) {
    super(propsAndChildren, "div");
  }

  public render() {
    return this.compile(changePass, this.props);
  }
}
