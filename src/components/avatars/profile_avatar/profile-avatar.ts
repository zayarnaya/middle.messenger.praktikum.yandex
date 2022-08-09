
import { Block } from "../../../utils/block";
import profileAvatar from "./profile-avatar.hbs";
import "./profile-avatar.scss";


export class profAvatar extends Block {
    constructor(props) {

      super("div", props, false);
    }
  
    render() {
      console.log("AVATAR RENDER");
          return this.compile(profileAvatar, this.props);
    }
  }
  