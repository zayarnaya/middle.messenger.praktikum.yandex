import formSignin from "./form-signin.hbs";
import "./form-signin.scss";
import { Form } from "../form";
import { FormProps } from "../../../types";

export class signinFormAll extends Form {
  public constructor(propsAndChildren: FormProps) {
    super(propsAndChildren, "div");
  }

  public render() {
    return this.compile(formSignin, {});
  }
}
