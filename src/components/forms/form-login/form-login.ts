import formLogin from "./form-login.hbs";
import { Form } from "../form";
import { FormProps } from "../../../types";
import "./form-login.scss";

export class loginFormAll extends Form {
  public constructor(propsAndChildren: FormProps) {
    super(propsAndChildren, "div");
  }

  public render() {
    return this.compile(formLogin, {});
  }
}
