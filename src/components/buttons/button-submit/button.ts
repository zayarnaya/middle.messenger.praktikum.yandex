import "./button-submit.scss";
import buttonSubmit from "./button-submit.hbs";
import { Block } from "../../../utils/block";
import { ButtonProps, Events } from "../../../types";

export class Button extends Block<Button> {
  public constructor(
    props: ButtonProps,
    events?: Events,
    eventTarget?: string
  ) {
    super("div", props, false, "center-center");
    if (!!events) {
      this.events = events;
    }

    if (!!eventTarget) {
      this.eventTarget = eventTarget;
    }
  }

  public render() {
    return buttonSubmit(this.props);
  }
}
