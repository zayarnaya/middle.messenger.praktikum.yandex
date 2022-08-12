import { Block } from "../../utils/block";
import inputRow from "./input-field.hbs";
import { inputValidation } from "../../utils/validator/input-validation";
import "./input-field.scss";
export class InputField extends Block {
  constructor(props) {
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

  render() {

    return inputRow(this.props, this.events);
  }
}
