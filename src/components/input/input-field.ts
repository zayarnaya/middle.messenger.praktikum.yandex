
import { Block } from "../../utils/block";

import inputRow from "./input-field.hbs";
import { inputError } from "../../utils/validator/input-error";

import "./input-field.scss";

export class InputField extends Block {
    constructor(props) {
      super("div", props, true);
      this.events = {
        blur: function() {

          inputError(this, true);
        },
        focus: function() {

          inputError(this, false);
        },
      };
      this.eventTarget = "input";
    }
  
    render() {

          return inputRow(this.props, this.events);
    }
  }
