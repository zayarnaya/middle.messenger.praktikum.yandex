
import "./button-submit.scss";

import buttonSubmit from "./button-submit.hbs";
import { Block } from "../../../utils/block";


export class Button extends Block {
  constructor(props: Record<string, any>) {

    super("div", props, false);
  }

  render() {
    return buttonSubmit(this.props);
  }
}
