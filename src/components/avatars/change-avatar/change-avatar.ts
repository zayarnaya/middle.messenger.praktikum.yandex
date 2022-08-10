
import { Block } from "../../../utils/block";
import changeAvatar from "./change-avatar.hbs";
import "./change-avatar.scss";


export class avatarChange extends Block {
    constructor(props: Record<string, any>) {
      super("div", props, false);
    }
  
    render() {
          return this.compile(changeAvatar, this.props);
    }
  }
  