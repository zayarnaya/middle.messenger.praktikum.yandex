
import "./button-submit.scss";

import buttonSubmit from "./button-submit.hbs";
import { Block } from "../../../utils/block";


export class Button extends Block {
    constructor(props) {

      super("div", props, false);
    }
  
    render() {
          //return this.compile(buttonSubmit, this.props);
          return buttonSubmit(this.props);
    }
  }
  