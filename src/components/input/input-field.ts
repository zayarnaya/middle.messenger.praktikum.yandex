import { Block } from "../../utils/block";
import inputRow from "./input-field.hbs";
import { inputValidation } from "../../utils/validator/input-validation";
import { InputFieldProps } from "../../types";
import "./input-field.scss";

export class InputField extends Block<InputFieldProps, InputField> {
  public constructor(props: InputFieldProps) {
    super("div", props, false);
    this.events = {
      blur: function () {
        inputValidation(this, true);
      },

      focus: function () {
        inputValidation(this, false);
      },
    };

    this.eventTarget = "input";
  }

  public render() {
    return inputRow(this.props, this.events);
  }
}
