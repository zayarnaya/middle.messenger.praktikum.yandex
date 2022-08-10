
import { Block } from "../../../utils/block";
import profileAvatar from "./profile-avatar.hbs";
import "./profile-avatar.scss";


export class profAvatar extends Block {
    constructor(props: Record<string, any>) {

      super("div", props, false);
    }
  
    render() {
          return this.compile(profileAvatar, this.props);
    }
  }
  