import { Form } from "../form";
import { FormProps } from "../../../types";
import changeProfile from "./form-changeprofile.hbs";
import "./form-changeprofile.scss";

export class ChangeUserProfile extends Form {
  public constructor(propsAndChildren: FormProps) {
    super(propsAndChildren, "div");
    Object.values(propsAndChildren.inputList.children).forEach((child) => {
      child.isValid = "true";
    });
  }

  public render() {
    return this.compile(changeProfile, {});
  }
}
