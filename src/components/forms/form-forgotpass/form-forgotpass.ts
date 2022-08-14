import { Form } from "../form";
import { FormProps } from "../../../types";
import formGetNewPass from "./form-forgotpass.hbs";

export class formForgotPass extends Form {
  public constructor(propsAndChildren: FormProps) {
    super(propsAndChildren, "div");
  }

  public render() {
    return this.compile(formGetNewPass, {});
  }
}
