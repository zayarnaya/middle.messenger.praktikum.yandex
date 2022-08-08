
import { Block } from "../../utils/block";

import inputRow from "./input-field.hbs";

import "./input-field.scss";

export class InputField extends Block {
    constructor(props) {
      super("div", props, true);
      this.events = props.events;
    }
  
    render() {

          return this.compile(inputRow, this.props);
    }
  }
