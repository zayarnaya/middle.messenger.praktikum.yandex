import "./button-submit.scss";
import buttonSubmit from "./button-submit.hbs";
import { Block } from "../../../utils/block";
import { ButtonProps } from "../../../types";

export class Button extends Block<ButtonProps, Button> {
  public constructor(props: ButtonProps) {

    super("div", props, false);
  }

  public render() {
    return buttonSubmit(this.props);
  }
}
