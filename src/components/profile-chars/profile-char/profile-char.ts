
import { Block } from "../../../utils/block";
import profileChar from "./profile-char.hbs";
import "./profile-char.scss";


export class profChar extends Block {
    constructor(props) {

      super("div", props, false);
    }
  
    render() {
          return this.compile(profileChar, this.props);
    }
  }
  