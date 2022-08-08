
import { Block } from "../../../utils/block";
import changeAvatar from "./change-avatar.hbs";
import "./change-avatar.scss";


export class avatarChange extends Block {
    constructor(props) {

      super("div", props, true);
    }
  
    render() {
          return this.compile(changeAvatar, this.props);
    }
  }
  